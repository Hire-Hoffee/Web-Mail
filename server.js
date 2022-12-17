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
};

const requestListener = async function (req, res) {
  try {
    console.log(`${req.httpVersion} ${req.method} ${req.url}`);

    if (req.url.match(/^\/api\/\w+$/) && req.method === "GET") {
      const folder = req.url.split("/")[2];
      controllers.getDataController(req, res, folder);
    } else if (req.url.match(/\/api\/email\//i) && req.method === "GET") {
      const email = req.url.split("/")[3];
      await controllers.getOneMailController(req, res, email);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Route Not Found: Use the api/[folderName] or api/email/[emailTitle] endpoint",
        })
      );
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Unexpected error occurred" }));
  }
};

const server = http.createServer(requestListener);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
