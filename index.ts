import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello from API");
});

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
  console.log('Server is running at port', PORT)
})
