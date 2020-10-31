import http from "http";

module.exports = http.createServer((req, res) => {
  res.end("Hello from API");
});


