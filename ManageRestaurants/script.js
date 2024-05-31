var stuck = false;
var endRefuse;
const connect = {
    joinCreatedLink: function(call) {
        const currentUrl = window.location.href;
        const currentUrlObj = new URL(currentUrl);
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/Add_a_Restaurant/token.json")
            .then(response => response.json())
            .then(data => {
                window.location.replace(`${currentUrlObj}/${call}?auth=${data.passWord}`);
            })
            .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
    },
    check: function() {
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/Add_a_Restaurant/token.json")
            .then(response => response.json())
            .then(data => {
                if (document.getElementById('code').value == data.passWord) this.open();
                else this.refuse();
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
        endRefuse && clearTimeout(endRefuse);
        ['fieldSetterCode','ButtonCodeSend'].forEach(el => {document.getElementById(el).style = "opacity: 0;"})
        setTimeout(() => {
            document.getElementById('personImage').style = "transform: translateY(32%);";
        }, start+=400);
        setTimeout(() => {
            document.getElementById('personImage').style = "border: 0 solid rgb(61, 205, 25); border-radius: 150px; transform: translateY(32%);";
            document.getElementById('authcontainer').style = "box-shadow: 0 0 400px rgb(61, 205, 25); background-color: rgb(61, 205, 25);";
            document.getElementById('loadericon').style = "opacity: 1; height: 80px;";
        }, start+=200);
        if (stuck === true) return;
        setTimeout(() => {
            document.getElementById('authenticator').style = "opacity: 0; transform: scale(1.5);";
            document.getElementById('containator').classList.remove('blur');
        }, start+=1500);
        setTimeout(() => {
            document.getElementById('authenticator').style = "display: none;";
            document.getElementById('containator').classList.remove('blur');
            document.getElementById('containator').style = "z-index: 9999;";
        }, start+=400);
    },
    refuse: function() {
        document.getElementById('fieldSetterCode').style = "border: 2px solid rgba(255, 70, 70, 0.6);";
        document.getElementById('authcontainer').style = "box-shadow: 0 0 400px rgb(255, 70, 70); background-color: rgb(155, 70, 70);";
        document.getElementById('personImage').style = "border: 4px solid rgb(255, 70, 70); border-radius: 160px; box-shadow: 0 0 200px rgb(255, 70, 70);";
        endRefuse = setTimeout(() => {
            document.getElementById('fieldSetterCode').style = "border: 2px solid rgba(178, 178, 178, 0.6);";
            document.getElementById('authcontainer').style = "box-shadow: 0 0 40px rgb(255, 128, 0); background-color: rgb(87, 87, 87);";
            document.getElementById('personImage').style = "border: 4px solid aliceblue; border-radius: 50px;";
        }, 2000);
    },
    lock: function() {
        location.reload();
    }
}