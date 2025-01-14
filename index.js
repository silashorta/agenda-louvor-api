const express = require("express");
const cors = require("cors");
const routes = require("../db/routes"); // Certifique-se de que este caminho está correto

const app = express();
app.use(cors());
app.use(express.json());

routes(app);

app.get("/", (req, res) => {
  res.send("API está funcionando!");
});

// Não usamos app.listen aqui, pois o Vercel cuida da execução
module.exports = app;
