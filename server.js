// server.js (im Projektverzeichnis)
const express = require("express");
const path = require("path");

const app = express();
const PORT = 80;

// Beispiel: Statisches Ausliefern des public-Ordners
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
