const http = require("http");
const db = require("./db.json");

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

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (error) {
      console.log(error);
      throw new Error("Unexpected error occurred");
    }
  },
};

const requestListener = function (req, res) {
  try {
    console.log(`${req.httpVersion} ${req.method} ${req.url}`);

    if (req.url.match(/\/api\/\w+/) && req.method === "GET") {
      const folder = req.url.split("/")[2];
      controllers.getDataController(req, res, folder);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Route Not Found: Use the api/[folderName] endpoint" }));
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
