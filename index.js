const express = require("express");
const cors = require("cors");
const routes = require("../db/routes");

const app = express();
app.use(cors());
app.use(express.json());

// Defina as rotas
routes(app);

// Exporte o servidor para o Vercel
module.exports = app;
