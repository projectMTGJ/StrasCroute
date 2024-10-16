const usual = {
    toggleExternals: function(show) {
        document.getElementById('rechercher').style.transform = `translateY(${!show ? "0" : "-100px"})`;
        document.getElementById('mainBar').style.transform = `translateY(${!show ? '0' : '100px'})`;
    },
    scrollTo: function(id) {
        const targetElement = id === "fc" ? document.body : document.getElementById(id);
        window.scrollTo({
            top: id === "fc" ? 0 : targetElement.getBoundingClientRect().top - 250,
            behavior: "smooth"
        });
    },
    toggleCard: function(which, show) {
        const body = document.getElementById('body');
        const card = document.getElementById(which);
        const doc = document.getElementById(`${which}docu`);
        const vignette = document.getElementById('vignetter');
        const close = document.getElementById('closebtn');
        const cardDesc = document.getElementById(`${which}description`);
        const cardText = document.getElementById(`${which}text`);
        const fillinfo = document.getElementById(`${which}fillinfo`);

        if (show) {
            usual.scrollTo(which);
            body.style = "overflow: hidden;";
            card.style = "cursor: default; border-radius: 0px; z-index: 1; background: rgba(248, 232, 197, 0.8); height: 101vh; width: 100vw; transform: translateY(-63px); border: 0px;";
            doc.style = "z-index: 2; height: 95%; opacity: 1; transform: translateY(0%);";
            vignette.style = "height: 400px";
            close.style = "display: flex;";
            cardDesc.style = "opacity: 0;";
            cardText.style = "opacity: 0; height: 0; margin: 0;";
        } else {
            usual.toggleExternals(false);
            fillinfo.scrollTo({top: 0});

            body.style = "";
            card.style = "";
            doc.style = "transition: ease 0.2s;";
            vignette.style = "";
            close.style = "";
            cardDesc.style = "";
            cardText.style = "";
        }
    }
};

/*const fs = require('fs');
const path = require('path');

function getFiles(directoryPath) {
    let results = [];
    
    // Lire les fichiers du répertoire
    const list = fs.readdirSync(directoryPath, { withFileTypes: true });

    list.forEach((file) => {
        const fullPath = path.join(directoryPath, file.name);

        if (file.isDirectory()) {
            // Appel récursif pour les sous-dossiers
            results = results.concat(getFiles(fullPath));
        } else {
            // Ajouter le fichier aux résultats
            results.push(fullPath);
        }
    });

    return results;
}

// Utiliser la fonction pour obtenir les fichiers
const fichiers = getFiles('./liste'); // Remplacez './coucou' par le chemin de votre répertoire
console.log(fichiers);*/