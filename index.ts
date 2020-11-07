import http from "http";
import path from "path";
import express from "express";
import { Server as SocketServer, Socket } from "socket.io";

const PORT = process.env.PORT || 8080;
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

app.use(express.urlencoded());
app.use(express.static(PUBLIC_DIRECTORY));

io.on("connection", (socket: Socket) => {
  console.log("a user connected", socket.id);

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(PUBLIC_DIRECTORY);
  console.log("Server is running at port", PORT);
});
