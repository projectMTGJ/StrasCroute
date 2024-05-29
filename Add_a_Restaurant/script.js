passWord = "Ax2346Zb";

const connect = {
    check: function() {
        if (document.getElementById('code').value == passWord) {
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
    },
    request: function() {
        document.getElementById('code').value = passWord;
    }
}