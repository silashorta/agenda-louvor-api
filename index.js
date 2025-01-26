const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // Caminho relativo para as rotas

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

 // Registrar as rotas
routes(app);

// Porta será gerenciada pela Vercel automaticamente
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
