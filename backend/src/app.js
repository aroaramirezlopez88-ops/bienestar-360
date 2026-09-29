const express = require("express");
const cors = require("cors");
const serviciosRoutes = require("./rutas/serviciosRoutes");
const categoriasRoutes = require("./rutas/categoriasRoutes");
const consultasContactoRoutes = require("./rutas/consultasContactoRoutes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/servicios", serviciosRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/consultas-contacto", consultasContactoRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API de Bienestar 360 funcionando"
  });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
