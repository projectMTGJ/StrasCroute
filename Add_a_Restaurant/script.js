const connect = {
    check: function() {
        fetch("token.json")
            .then(response => response.json())
            .then(data => {
                if (document.getElementById('code').value == data.passWord) {
                    listRem = ['fieldSetterCode','ButtonCodeSend'];
                    listRem.forEach(el => {document.getElementById(el).style = "opacity: 0;"})
                    setTimeout(() => {
                        listRem.forEach(el => {document.getElementById(el).style = "display: none;";})
                    }, 400);
                    setTimeout(() => {
                        document.getElementById('bvnText').style = "display: flex;";
                        document.getElementById('personImage').style = "border: 4px solid rgb(61, 205, 25);";
                    }, 1000);
                    setTimeout(() => {
                        document.getElementById('authenticator').style = "opacity: 0;";
                        document.getElementById('containator').classList.remove('blur');
                    }, 2500);
                    setTimeout(() => {
                        document.getElementById('authenticator').style = "display: none;";
                        document.getElementById('containator').classList.remove('blur');
                        document.getElementById('containator').style = "z-index: 9999;";
                    }, 3000);
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
            .catch(error => console.error('Error fetching the token:', error));
    },
    open: function() {
        document.getElementById('authenticator').style = "display: none;";
        document.getElementById('containator').classList.remove('blur');
        document.getElementById('containator').style = "z-index: 9999;";
    },
    verify: function() {
        const currentUrl = window.location.href;
        const currentUrlObj = new URL(currentUrl);
        const currentParams = new URLSearchParams(currentUrlObj.search);

        const currentPage = currentParams.get('page');
        const currentSort = currentParams.get('sort');

        console.log('Current Page:', currentPage);
        console.log('Current Sort:', currentSort);
    }
}