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
        const body = document.getElementById('body')
        const card = document.getElementById(which);
        const doc = document.getElementById(`${which}docu`);
        const vignette = document.getElementById('vignetter');
        const cardDesc = document.getElementById(`${which}description`);
        const cardText = document.getElementById(`${which}text`)

        usual.scrollTo(which);

        body.style = "overflow: hidden;";
        card.style = "border-radius: 0px; z-index: 1; background: rgba(248, 232, 197, 0.8); height: 101vh; width: 100vw; transform: translateY(-63px); border: 0px;";
        doc.style = "z-index: 2; height: 95vh; opacity: 1;"
        vignette.style = "height: 400px";
        cardDesc.style = "z-index: 3; position: absolute; margin-top: 60px; width: 86.5vw; margin-left: 6vw; color: aliceblue;";
        cardText.style = "opacity: 0; height: 0; margin:0;";
    }
}