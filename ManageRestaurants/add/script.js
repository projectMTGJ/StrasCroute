var checkAuthWhenConnect = function() {
    const currentUrl = window.location.href;
    const currentUrlObj = new URL(currentUrl);
    const currentParams = new URLSearchParams(currentUrlObj.search);
    fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/ManageRestaurants/token.json")
        .then(response => response.json())
        .then(data => {
            if (currentParams.get('auth') == data.key) return;
            else {
                document.getElementById('containMain').style = "filter: blur(50px);"
                document.getElementById('forceCloseWindow').style = "opacity: 1; z-index: 9999;"
                document.getElementById('contentWin').style = "height: 65%; width: 60%;"
                for (let i=0; i<=2; i++) {
                    setTimeout(() => {
                        document.getElementById(i.toString()).style = "opacity: 1;"
                    }, 800 + 300*i);
                }
                setTimeout(() => {window.close()}, 5000);
            }
        })
        .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
}

const manage = {
    addCompo: function(origin) {
        const doc = document.getElementById(`${origin}Liste`);
        const num = doc.children.length;
        if (num >= 7) return;
        const card = document.createElement('fieldset');
        card.classList.add('card');
        card.id = `${num}${origin}`
        card.innerHTML = `
        <legend>${origin} n°${num} 
            <img onclick="manage.removeCompo('${num}${origin}', '${origin}')" src="https://raw.githubusercontent.com/projectMTGJ/StrasCroute/refs/heads/master/images/delete.png" alt="delete">
        </legend>
        <input type="file" name="${num}${origin}image" id="${num}${origin}image">
        <input type="text" name="${num}${origin}name" id="${num}${origin}name" placeholder="Nom du plat">
        <input type="text" name="${num}${origin}prix" id="${num}${origin}prix" placeholder="Prix du plat">
        <fieldset class="note" id="${num}${origin}note">
            <legend>Qualité globale</legend>
            <div class="top-values-range"><div class="val">0</div><div class="val">1</div><div class="val">2</div><div class="val">3</div><div class="val">4</div><div class="val">5</div></div>
            <input type="range" min="0" max="50" id="${num}${origin}note" value="0">
        </fieldset>
        `;
        doc.appendChild(card);
    },
    removeCompo: function(id, origin) {
        const doc = document.getElementById(`${origin}Liste`);
        const card = document.getElementById(id);
        doc.removeChild(card);
    },
    updateCount: function(id) {
        document.getElementById(`${id}value`).innerHTML = document.getElementById(id).value/10;
    }
}

// always check
const alwaysCheck = setInterval(() => checkAuthWhenConnect(), 10000);