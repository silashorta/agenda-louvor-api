const express = require("express");
const cors = require("cors");
const routes = require("../db/routes"); // Certifique-se de que este caminho está correto

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para parsear JSON


routes(app);

const porta = 3000;

app.listen(porta, () => {
  console.log("Rodando servidor na porta " + porta);
});

module.exports = app;
