const http = require("http");
const path = require("path");
const staticFile = require("./appModules/http-utils/static-file");
const mimeTypes = require("./appModules/http-utils/mime-types");
const mainRouteController = require("./controllers/main");
const gameRouteController = require("./controllers/game");
const defaultRouteController = require("./controllers/default");
const voteRouteController = require("./controllers/vote");

const PORT = 3007



const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
        break;
        case "/game":
                gameRouteController(res);
        break;
        case "/vote":
                 voteRouteController(req, res);
        break;
        default: defaultRouteController(res, url);
        break;
          
    }
  });

  server.listen(3007);
  //я не понимаю что не так ааааа