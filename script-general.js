const elements = {
    1: {
        nom: "Bang Burgers",
        type: "Smash Burgers"
    },
    2: {
        nom: "Starling",
        type: "Burger"
    },
    3: {
        nom: "Matsumotoya",
        type: "Asiatique"
    }
}

var results = [];
function search(req) {
    const lenReq = req.split('').length;
    const organizedValues = (values) => {
        let queue = [];
        Object.entries(values).forEach(([key, value], index) => {
            match = 0;
            const lenValue = value.split('').length;
            const lenTot = lenReq < lenValue ? lenReq : lenValue;
            for (let i = 0; i<lenTot; i++) {
                if (value[i].toLowerCase() == req[i].toLowerCase) {
                    match++;
                }
            }
            if (match > 0) {
                queue.push([index, match, key]);
            }
        });
        return queue;
    }
    let bestResult = []
    Object.entries(elements).forEach(([key, value]) => {
        const currentResult = organizedValues(value);
        bestResult.push(currentResult.sort((b,a) => {a[1] - b[1]}).splice(1));
        
    });
    console.log(bestResult);
}

search("burger")