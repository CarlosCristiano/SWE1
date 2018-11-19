const express = require('express');
const body_parser = require('body-parser');

const app = express();

app.use(express.static('static'));

app.use(body_parser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH");
    next();
});

let owner = {firstName: "Andreea", lastName: "Carst", address: "Valley of pink souls"};

let cats =
    [{catID: 1, catName: 'Bubbles', catBreed: 'Tiger', catColor: 'White/Grey', catAge: 1, catOwner: owner}];

app.get('/cats', (_, res) => {
    res.send(cats)
});

app.patch(('/cats/update'), (req, res) => {
    const catArray = req.body;
    if (!catArray) {
        res.status(409);
        res.send();
    } else {
        cats = catArray;
        res.send(catArray)
    }
});

app.post('/cats', (req, res) => {
    const cat = req.body; //Cat to be added

    let lastCat = cats[cats.length - 1];
    console.log(cats);
    for (let i = 0; i < cats.length; i++) {
        if (cat.catName === cats[i].catName &&cat.catOwner.lastName === cats[i].catOwner.lastName
            && cat.catOwner.address === cats[i].catOwner.address) {
            res.send("Cat and Owner already exists");
            console.log(cats.length);
            return;
        }
    }
    cat.catID = lastCat.catID + 1;
    cats.push(cat);
    res.send(cat)
});

app.listen(9090, () => console.log("Server is listening on 9090"));

