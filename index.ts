import http from "http";
import path from "path";
import express from "express";

const PORT = process.env.PORT || 8080;
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);

app.use(express.urlencoded());
app.use(express.static(PUBLIC_DIRECTORY));

server.listen(PORT, () => {
  console.log(PUBLIC_DIRECTORY);
  console.log("Server is running at port", PORT);
});
