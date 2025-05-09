// For Mock Data

const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors()); // Allow CORS requests
server.use(middlewares);
server.use(router);
server.listen(8000, () => {
  console.log("JSON Server is running on http://localhost:8000");
});
