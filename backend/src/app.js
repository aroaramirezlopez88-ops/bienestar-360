const express = require("express");
const serviciosRoutes = require("./rutas/serviciosRoutes");

const app = express();

const PORT = 3000;

app.use("/api/servicios", serviciosRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API de Bienestar 360 funcionando"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
