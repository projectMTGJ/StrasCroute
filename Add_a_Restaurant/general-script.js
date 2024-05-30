const auth = {
    add: function() {
        fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/Add_a_Restaurant/token.json")
            .then(response => response.json())
            .then(data => {
                /*
                const currentUrlObj = new URL(window.location.href);
                const currentParams = new URLSearchParams(currentUrlObj.search);
                currentParams.set('auth', data.passWord);
                currentUrlObj.search = currentParams.toString();
                window.history.replaceState({}, '', currentUrlObj.toString());
                */
            })
            .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
    }
}