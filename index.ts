import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => res.send("Hello from express"));

app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
