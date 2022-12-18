const http = require("http");
const db = require("./db.json");
const path = require("path");
const fs = require("fs").promises;

const utils = {
  folderDict: {
    inbox: "Входящие",
    important: "Важное",
    sent: "Отправленные",
    drafts: "Черновики",
    archive: "Архив",
    spam: "Спам",
    trash: "Корзина",
  },
  lightData: () => {
    return db.map((letter) => {
      delete letter.doc;
      return letter;
    });
  },
};

const controllers = {
  getDataController: (req, res, query) => {
    try {
      function filterData(param) {
        if (param in utils.folderDict) {
          return utils.lightData().filter((letter) => letter.folder === utils.folderDict[param]);
        }
        return { message: "Not found" };
      }

      const result = filterData(query);
      result.sort((a, b) => {
        a = new Date(a.date).getTime();
        b = new Date(b.date).getTime();
        return b - a;
      });

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      };

      res.writeHead(200, headers);
      res.end(JSON.stringify(result));
    } catch (error) {
      console.log(error);
      throw new Error("Unexpected error occurred");
    }
  },
  getOneMailController: async (req, res, query) => {
    try {
      const bigFile = JSON.parse(await fs.readFile(path.resolve("./db.json")));
      const result = bigFile.find((letter) => letter.title === decodeURI(query));

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      };

      res.writeHead(200, headers);
      res.end(JSON.stringify(result));
    } catch (error) {
      console.log(error);
      throw new Error("Unexpected error occurred");
    }
  },
  sendStatic: async (req, res) => {
    let filePath = req.url;

    if (filePath == "/") {
      filePath = "./index.html";
    } else {
      filePath = "." + req.url;
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
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

    if (req.url.match(/^\/api\/\w+$/) && req.method === "GET") {
      const folder = req.url.split("/")[2];
      controllers.getDataController(req, res, folder);
      return;
    }
    if (req.url.match(/\/api\/email\//i) && req.method === "GET") {
      const email = req.url.split("/")[3];
      await controllers.getOneMailController(req, res, email);
      return;
    }
    if (req.url.match(/^\/$/) || (req.url.match(/\/assets\//) && req.method === "GET")) {
      controllers.sendStatic(req, res);
      return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: "Use the api/[folderName] or api/email/[emailTitle] endpoint" })
    );
  } catch (error) {
    console.log(error);

    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Unexpected error occurred" }));
  }
};

const server = http.createServer(reqListener);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
