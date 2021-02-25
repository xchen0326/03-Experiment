const express = require("express");
const app = express();
const bodyparser = require("body-parser")

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
// app.use(express.static("views"));
app.use(express.static("public"));
app.use(express.static("BarChart"));
app.use(express.static("Pie Chart"));
app.use(express.static("Tree Map"));
app.use(express.static("views"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/starterView/consentNotify.html");
});


// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Used like so
var arrs = [1, 2, 3, 4];
shuffle(arrs);
console.log(arrs);
let index = -1
console.log(index)

app.get('/nextPage', function( req, res ){
    index += 1
    if (arrs[index] === 1) {
        res.sendFile(__dirname + "/Pie Chart/index_pie.html")
    }
    else if (arrs[index] === 2) {
        res.sendFile(__dirname + "/Tree Map/index_tree.html")
    }
    else if (arrs[index] === 3) {
        res.sendFile(__dirname + "/BarChart/index_bar_vertical.html")
    }
    else if (arrs[index] === 4) {
        res.sendFile(__dirname + "/BarChart/index_bar_horizontal.html")
    }
    // res.sendFile(__dirname + "/Tree Map/index_tree.html")
})

app.post('/recAns', bodyparser.json(), function( req, res ){
    // console.log('body:',req.body)
    // if (arrs[index] === 1) {
    //     res.sendFile(__dirname + "/Pie Chart/index_pie.html")
    // }
    // else if (arrs[index] === 2) {
    //     res.sendFile(__dirname + "/Tree Map/index_tree.html")
    // }
    // else if (arrs[index] === 3) {
    //     res.sendFile(__dirname + "/BarChart/index_bar_vertical.html")
    // }
    // else if (arrs[index] === 4) {
    //     res.sendFile(__dirname + "/BarChart/index_bar_horizontal.html")
    // }
    // res.json({ success: req.body })
    res.redirect('/leads')
})

app.get('/leads', function (req, res){
    res.sendFile(__dirname + "/BarChart/index_bar_horizontal.html");
});