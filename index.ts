import https from "https";
import path from "path";
import fs from "fs";
import express from "express";
import { Server as SocketServer, Socket } from "socket.io";

const PORT = process.env.PORT || 8080;
const CLIENT_DIRECTORY = path.join(__dirname, "../client/dist");
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};
const app = express();
const server = https.createServer(options, app);
const io = new SocketServer(server);

app.use(express.urlencoded());
app.use(express.static(CLIENT_DIRECTORY));

io.on("connection", (socket: Socket) => {
  console.log("a user connected", socket.id);

  socket.on("message", (msg: string) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
