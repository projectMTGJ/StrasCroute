const search = document.getElementById('rechercher');
const mainBar = document.getElementById('mainBar');

const usual = {
    hideExternals: function() {
        const search = document.getElementById('rechercher');
        const mainBar = document.getElementById('mainBar');
        search.style = "transform: translateY(-100px);"
        mainBar.style = "transform: translateY(100px);"
    },
    showExternals: function() {
        const search = document.getElementById('rechercher');
        const mainBar = document.getElementById('mainBar');
        search.style = "transform: translateY(0);"
        mainBar.style = "transform: translateY(0);"
    },
    scrollTo: function(id) {
        var targetElement = (id === "fc") ? document.body : document.getElementById(id);
        window.scrollTo({
            top: ((id === "fc") ? 0 : targetElement.getBoundingClientRect().top - 250),
            behavior: "smooth"
        });
    }
};

const card = {
    show: function(which) {
        const body = document.getElementById('body');
        const card = document.getElementById(which);
        const doc = document.getElementById(`${which}docu`);
        const vignette = document.getElementById('vignetter');
        const close = document.getElementById('closebtn');
        const cardDesc = document.getElementById(`${which}description`);
        const cardText = document.getElementById(`${which}text`);

        usual.scrollTo(which);

        body.style = "overflow: hidden;";
        card.style = "cursor: default; border-radius: 0px; z-index: 1; background: rgba(248, 232, 197, 0.8); height: 101vh; width: 100vw; transform: translateY(-63px); border: 0px;";
        doc.style = "z-index: 2; height: 95%; opacity: 1; transform: translateY(0%);"
        vignette.style = "height: 400px";
        close.style = "display: flex;"
        cardDesc.style = "opacity: 0;";
        cardText.style = "opacity: 0; height: 0; margin:0;";
    },
    close: function(which) {
        const body = document.getElementById('body');
        const card = document.getElementById(which);
        const doc = document.getElementById(`${which}docu`);
        const vignette = document.getElementById('vignetter');``
        const close = document.getElementById('closebtn');
        const cardDesc = document.getElementById(`${which}description`);
        const cardText = document.getElementById(`${which}text`);
        const fillinfo = document.getElementById(`${which}fillinfo`);

        usual.showExternals();
        fillinfo.scrollTo({top: 0});

        body.style = "";
        card.style = "";
        doc.style = "transition: ease 0.2s;"
        vignette.style = "";
        close.style = ""
        cardDesc.style = "";
        cardText.style = "";
    }
}