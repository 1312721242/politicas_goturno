// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Servir directamente la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rutas directas
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
