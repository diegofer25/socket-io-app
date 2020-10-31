import http from "http";

export default http.createServer((req, res) => {
  res.end("Hello from API");
});


