



const express = require("express");
const routes = require("./routes"); 
const app = express();

app.use(express.json());

routes(app);

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

module.exports = app;
