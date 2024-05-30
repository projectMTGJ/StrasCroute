const connect = {
    check: function() {
        fetch("token.json")
            .then(response => response.json())
            .then(data => {
                if (document.getElementById('code').value == data.passWord) {
                    this.open();
                } else {
                    document.getElementById('fieldSetterCode').style = "border: 2px solid rgba(255, 70, 70, 0.6);";
                }
            })
            .catch(error => console.error('Error fetching the token:', error));
    },
    request: function() {
        fetch("token.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById('code').value = data.passWord;
            })
            .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
    },
    open: function(start=400) {
        const listRem = ['fieldSetterCode','ButtonCodeSend'];
        listRem.forEach(el => {document.getElementById(el).style = "opacity: 0;"})
        setTimeout(() => {
            listRem.forEach(el => {document.getElementById(el).style = "display: none;";})
        }, start+=400);
        setTimeout(() => {
            document.getElementById('personImage').style = "border: 20px solid rgb(61, 205, 25);";
            document.getElementById('authcontainer').style = "box-shadow: 0 0 400px rgb(61, 205, 25);";
        }, start+=1000);
        setTimeout(() => {
            document.getElementById('personImage').style = "border: 300px solid rgb(61, 205, 25);";
            document.getElementById('authenticator').style = "opacity: 0;";
            document.getElementById('containator').classList.remove('blur');
        }, start+=400);
        setTimeout(() => {
            document.getElementById('authenticator').style = "display: none;";
            document.getElementById('containator').classList.remove('blur');
            document.getElementById('containator').style = "z-index: 9999;";
        }, start+=400);
    },
    verify: function() {
        const currentUrl = window.location.href;
const currentUrlObj = new URL(currentUrl);
const currentParams = new URLSearchParams(currentUrlObj.search);

// Modifier les paramètres existants ou ajouter de nouveaux paramètres
currentParams.set('auth', 'passWord');

// Mettre à jour l'URL avec les nouveaux paramètres
        currentUrlObj.search = currentParams.toString();
        const newUrl = currentUrlObj.toString();

        console.log(newUrl); // Affiche l'URL mise à jour
// Vous pouvez ensuite rediriger l'utilisateur vers cette nouvelle URL
// window.location.href = newUrl;
    }
}