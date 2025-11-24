const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/privacidad", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "privacidad.html"));
});

app.get("/terminos", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "terminos.html"));
});

app.get("/cookies", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cookies.html"));
});

app.get("/", (req, res) => {
    res.send("GoTurno Políticas funcionando ✔️");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
