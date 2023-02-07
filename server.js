const http = require("http");
const path = require("path");
const fs = require("fs").promises;
const fs2 = require("fs");

const utils = {
  bigFile: undefined,
  folderDict: {
    inbox: "Входящие",
    important: "Важное",
    sent: "Отправленные",
    drafts: "Черновики",
    archive: "Архив",
    spam: "Спам",
    trash: "Корзина",
  },
  calculateFileSize: (file) => {
    const base64str = file.split(",")[1];
    const decodedString = base64str.toString("base64");
    const size = Math.round(decodedString.length / 1000);
    return size > 1000 ? `${Math.round(size / 1000)}Mb` : `${size}Kb`;
  },
  saveAsJpg: async (base64, dir, id) => {
    const image = Buffer.from(base64.split(";base64,").pop(), "base64");
    const buffer = Buffer.from(image, "base64");
    return await fs.writeFile(path.resolve(dir, `${id}.jpg`), buffer);
  },
  lightData: async (dir) => {
    if (utils.bigFile) {
      return utils.bigFile;
    }

    if (fs2.existsSync(dir)) {
      await fs.rm(dir, { recursive: true });
    }

    await fs.mkdir(dir);

    utils.bigFile = JSON.parse(await fs.readFile(path.resolve("./db.json")));
    utils.bigFile = utils.bigFile.map((letter) => {
      letter.id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      if (letter.doc) {
        utils.saveAsJpg(letter.doc.img, dir, letter.id);
        letter.doc.size = utils.calculateFileSize(letter.doc.img);
        letter.doc.img = `/${dir}/${letter.id}.jpg`;
      }
      if (letter.folder === undefined) {
        letter.folder = "Входящие";
      }
      if (letter.flag === "Путешевствия") {
        letter.flag = "Путешествия";
      }

      return letter;
    });

    return utils.bigFile;
  },
};

const controllers = {
  getDataController: async (req, res, query, pageNum = 1) => {
    try {
      async function filterData(param) {
        if (param in utils.folderDict) {
          const result = await utils.lightData("attachments");
          return result.filter((letter) => letter.folder === utils.folderDict[param]);
        }
        return { message: "Not found" };
      }

      let result = await filterData(query);
      result.sort((a, b) => {
        a = new Date(a.date).getTime();
        b = new Date(b.date).getTime();
        return b - a;
      });
      result = result.slice((pageNum - 1) * 20, pageNum * 20);

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      };

      if (result) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(result));
        return;
      }

      res.writeHead(404, headers);
      res.end(JSON.stringify({ message: "Not found" }));
      return;
    } catch (error) {
      console.log(error);
      throw new Error("Unexpected error occurred");
    }
  },
  getOneMailController: async (req, res, query) => {
    try {
      const result = utils.bigFile.find((letter) => letter.title === decodeURI(query));

      if (result.doc && !Array.isArray(result.doc)) {
        const img = result.doc;
        result.doc = [];
        result.doc.push(img);
      }

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      };

      if (result) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(result));
        return;
      }

      res.writeHead(404, headers);
      res.end(JSON.stringify({ message: "Not found" }));
      return;
    } catch (error) {
      console.log(error);
      throw new Error("Unexpected error occurred");
    }
  },
  getEmailImages: async (req, res, query) => {
    try {
      const bigFile = JSON.parse(await fs.readFile(path.resolve("./db.json")));
      const result = bigFile.find((letter) => letter.title === decodeURI(query));

      if (result.doc && !Array.isArray(result.doc)) {
        const img = result.doc;
        result.doc = [];
        result.doc.push(img);
      }
      const images = result.doc;

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      };

      if (images) {
        res.writeHead(200, headers);
        res.end(JSON.stringify(images));
        return;
      }

      res.writeHead(404, headers);
      res.end(JSON.stringify({ message: "Not found" }));
      return;
    } catch (error) {
      console.log(error);
      throw new Error("Unexpected error occurred");
    }
  },
  sendStaticController: async (req, res, filePath) => {
    if (filePath == "/" || !filePath.match(/\/assets\/|\/attachments\//)) {
      filePath = path.join(__dirname, "index.html");
    } else {
      filePath = path.join(__dirname, req.url);
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".svg": "image/svg+xml",
      ".ttf": "application/font-ttf",
      ".ico": "image/x-icon",
    };
    let contentType = mimeTypes[extname] || "application/octet-stream";

    const result = await fs.readFile(filePath);

    res.writeHead(200, { "Content-Type": contentType });
    res.end(result, "utf-8");
  },
};

const reqListener = async function (req, res) {
  try {
    console.log(`${req.httpVersion} ${req.method} ${req.url}`);

    if (req.url.match(/^\/(?!api)/) && req.method === "GET") {
      await controllers.sendStaticController(req, res, req.url);
      return;
    }
    if (req.url.match(/^\/api\/\w+\/\d+$/) && req.method === "GET") {
      const folder = req.url.split("/")[2];
      const pageNum = req.url.split("/")[3];
      await controllers.getDataController(req, res, folder, pageNum);
      return;
    }
    if (req.url.match(/\/api\/email\?title=[\W\w+а-яёА-ЯЁ ]+&imgs=true/i) && req.method === "GET") {
      const email = req.url.split("=")[1].split("&")[0];
      await controllers.getEmailImages(req, res, email);
      return;
    }
    if (req.url.match(/\/api\/email\?title/i) && req.method === "GET") {
      const email = req.url.split("=")[1];
      await controllers.getOneMailController(req, res, email);
      return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Use the api/[data] or /inbox endpoint" }));
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Unexpected error occurred" }));
  }
};

const server = http.createServer(reqListener);
const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  console.log("Starting ...");
  await utils.lightData("attachments");
  console.log("Server is running on port " + PORT);
});
