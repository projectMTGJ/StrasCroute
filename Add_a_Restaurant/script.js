const connect = {
    check: function() {
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/Add_a_Restaurant/token.json")
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
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/Add_a_Restaurant/token.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById('code').value = data.passWord;
            })
            .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
    },
    open: function(start=400) {
        ['fieldSetterCode','ButtonCodeSend'].forEach(el => {document.getElementById(el).style = "opacity: 0;"})
        setTimeout(() => {
            document.getElementById('personImage').style = "transform: translateY(32%);";
        }, start+=400);
        setTimeout(() => {
            document.getElementById('personImage').style = "border: 0 solid rgb(61, 205, 25); border-radius: 150px; transform: translateY(32%);";
            document.getElementById('authcontainer').style = "box-shadow: 0 0 400px rgb(61, 205, 25); background-color: rgb(61, 205, 25);";
            document.getElementById('loadericon').style = "opacity: 1; height: 80px;";
        }, start+=200);
        setTimeout(() => {
            document.getElementById('authenticator').style = "opacity: 0; transform: scale(1.5);";
            document.getElementById('containator').classList.remove('blur');
        }, start+=2000);
        setTimeout(() => {
            document.getElementById('authenticator').style = "display: none;";
            document.getElementById('containator').classList.remove('blur');
            document.getElementById('containator').style = "z-index: 9999;";
        }, start+=400);
    },
    lock: function() {
        location.reload()
    }
}