import { io } from "socket.io-client";
const socket = io();
const messages = document.getElementById("messages");
const input = document.getElementById("input") as HTMLInputElement;

document.getElementById("send")?.addEventListener("click", () => {
  if (!input) {
    return;
  }
  socket.emit("message", input.value);
  input.value = "";
  return false;
});

socket.on("message", function(msg: string) {
  if (!messages) {
    return;
  }
  const message = document.createElement("li");
  message.innerText = msg;
  messages.append(message);
});
