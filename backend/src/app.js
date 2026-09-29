const express = require("express");
const serviciosRoutes = require("./rutas/serviciosRoutes");
const categoriasRoutes = require("./rutas/categoriasRoutes");
const consultasContactoRoutes = require("./rutas/consultasContactoRoutes");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api/servicios", serviciosRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/consultas-contacto", consultasContactoRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API de Bienestar 360 funcionando"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
