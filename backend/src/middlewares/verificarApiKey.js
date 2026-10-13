require("dotenv").config();

function verificarApiKey(req, res, next) {
  const apiKey = req.get("x-api-key");

  if (!apiKey || apiKey !== process.env.DEMO_API_KEY) {
    return res.status(401).json({
      error: "API key inválida o no proporcionada",
    });
  }

  next();
}

module.exports = verificarApiKey;
