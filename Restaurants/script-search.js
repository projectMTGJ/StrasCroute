const fs = require("fs"); // Module pour lire des fichiers
const Fuse = require("fuse.js"); // Importation de Fuse.js

// Lecture et parsing du fichier JSON
const data = JSON.parse(fs.readFileSync("liste/data.json", "utf-8"));

// Configuration de Fuse.js
const fuse = new Fuse(data, {
  keys: [
    "name",
    "key-words",
    "type",
    "cost",
    "enligne",
    "localisation.adresse", // Recherche dans les champs imbriqués
    "localisation.horaires" // Recherche dans les champs imbriqués
  ],
  threshold: 0.4, // Permet des fautes mineures
});

// Effectuer une recherche et limiter à 5 résultats
const results = fuse.search("Starling").map(result => result.item).slice(0, 5);

// Afficher les résultats dans la console
console.log(results);