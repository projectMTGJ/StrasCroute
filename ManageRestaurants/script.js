var endRefuse;
const connect = {
    joinCreatedLink: function(call) {
        const currentUrl = window.location.href;
        const currentUrlObj = new URL(currentUrl);
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/ManageRestaurants/token.json")
            .then(response => response.json())
            .then(data => {
                window.location.replace(`${currentUrlObj}/${call}?auth=${data.key}`);
            })
            .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
    },
    check: function() {
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/ManageRestaurants/token.json")
            .then(response => response.json())
            .then(data => {
                if (document.getElementById('code').value == data.key && document.getElementById('username').value == data.username) this.open();
                else this.refuse();
            })
            .catch(error => console.error('Error fetching the token:', error));
    },
    request: function() {
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/ManageRestaurants/token.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById('code').value = data.key;
            })
            .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
    },
    open: function(start=400) {
        endRefuse && clearTimeout(endRefuse);
        ['fieldSetterPassword', 'fieldSetterUsername', 'ButtonCodeSend'].forEach(el => {document.getElementById(el).style = "opacity: 0;"})
        Array.from(document.getElementById('circles').children).forEach(el => el.style = "background-color: rgba(61, 205, 25, 0.9)");
        setTimeout(() => {
            document.getElementById('personImage').style = "border: 0 solid rgb(61, 205, 25); border-radius: 150px; transform: translateY(32%);";
            document.getElementById('authcontainer').style = "box-shadow: 0 0 400px rgb(61, 205, 25); background-color: rgb(61, 205, 25); border: 0px rgba(0, 0, 0, 0) solid;";
            document.getElementById('loadericon').style = "opacity: 1; height: 80px; position: relative;";
        }, start+=100);
        setTimeout(() => {
            document.getElementById('authenticator').style = "opacity: 0; transform: scale(1.5);";
            document.getElementById('blur').style = "opacity: 0";
        }, start+=1500);
        setTimeout(() => {
            document.getElementById('authenticator').style = "display: none;";
            document.getElementById('containator').style = "z-index: 9999;";
        }, start+=400);
    },
    refuse: function() {
        document.getElementById('fieldSetterPassword').style = "border: 2px solid rgba(255, 70, 70, 0.8);";
        document.getElementById('fieldSetterUsername').style = "border: 2px solid rgba(255, 70, 70, 0.8);";
        document.getElementById('authcontainer').style = "box-shadow: 0 0 400px rgb(255, 70, 70); background-color: rgb(209, 55, 55); border: 2px solid rgba(255, 70, 70, 0.8);";
        document.getElementById('personImage').style = "border: 4px solid rgb(255, 70, 70); border-radius: 160px; box-shadow: 0 0 200px rgb(255, 70, 70);";
        Array.from(document.getElementById('circles').children).forEach(el => el.style = "background-color: rgba(255, 70, 70, 0.8)"); 
        endRefuse = setTimeout(() => {
            document.getElementById('fieldSetterUsername').style = "border: 2px solid rgba(178, 178, 178, 0.6);";
            document.getElementById('fieldSetterPassword').style = "border: 2px solid rgba(178, 178, 178, 0.6);";
            document.getElementById('authcontainer').style = "box-shadow: 0 0 0px rgba(0, 0, 0, 0); background-color: rgba(0, 0, 0, 0); border: 2px rgb(46, 99, 127) solid;";
            document.getElementById('personImage').style = "border: 4px solid aliceblue; border-radius: 50px;";
            document.getElementById('code').value = "";
            Array.from(document.getElementById('circles').children).forEach(el => el.style = "background-color: rgba(255, 255, 255, 0.2);");
        }, 2000);
    },
    lock: function() {
        window.close();
    }
}