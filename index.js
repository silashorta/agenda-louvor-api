const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // Caminho relativo para as rotas

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Registrar as rotas
routes(app);


module.exports = app

