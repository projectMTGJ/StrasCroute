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
                document.getElementById('contentWin').style = "height: 65%; width: 35%;"
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

const alwaysCheck = setInterval(() => checkAuthWhenConnect(), 10000);
