var checkAuthWhenConnect = function() {
    const currentUrl = window.location.href;
    const currentUrlObj = new URL(currentUrl);
    const currentParams = new URLSearchParams(currentUrlObj.search);
    const code = currentParams.get('auth');
    fetch("https://raw.githubusercontent.com/projectMTGJ/StrasCroute/master/Add_a_Restaurant/token.json")
        .then(response => response.json())
        .then(data => {
            
            if (code == data.passWord) return;
            else window.location.replace('https://projectmtgj.github.io/StrasCroute/');
            
        })
        .catch(error => alert("Il y a un problème veuillez contacter l'Administrateur"+error));
}