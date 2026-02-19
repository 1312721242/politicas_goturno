const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Estáticos
app.use(express.static(path.join(__dirname, "public")));

// ✅ Páginas existentes
app.get("/privacidad", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "privacidad.html"));
});
app.get("/terminos", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "terminos.html"));
});
app.get("/cookies", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cookies.html"));
});

// ✅ NUEVO: puente para abrir Paddle Checkout desde mobile
app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "checkout.html"));
});

// (Opcional) si quieres que /checkout/ también funcione
app.get("/checkout/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "checkout.html"));
});

app.get("/", (req, res) => {
  res.send("GoTurno Políticas funcionando ✔️");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
