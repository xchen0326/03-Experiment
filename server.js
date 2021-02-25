const express = require("express");
const app = express();
const bodyparser = require("body-parser")

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
// app.use(express.static("views"));
app.use(express.static("public"));
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

app.get('/agree', function( req, res ){
    res.sendFile(__dirname + "/Pie Chart/index_pie.html")
})

app.post('/recAns', bodyparser.json(), function( req, res ){
    console.log('body:',req.body)
    res.json({ success: req.body })
    // collection.insertOne( req.body)
    //     .then( dbresponse=>{
    //         console.log( dbresponse.insertedId )
    //         res.json(dbresponse.insertedId)
    //     })
})