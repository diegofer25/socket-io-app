import express from "express";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => res.send("Hello from express"));

app.get("/user/:name", (req, res) => {
  const { name } = req.params;

  res.send(`The user name is ${name}`);
});

app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
