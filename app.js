const express = require('express');
const app = express();

const fetch = require('node-fetch');

app.use(express.static('client'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var homeScore = 0;
var awayScore = 0;
var homeName = "Wakefield";
var awayName = "Other Team";
var period = "VS";
var go = false;

// 'POST' is receiving data from index.js (controls)
// 'GET' is sending data to board.js (display)

// post

var event;
app.post("/time", function(req, resp) {
    if (req.query != {}) {
        event = req.query.event;
    } else {
        resp.status(400);
    }
});

var length = 2100;
app.post("/length", function(req, resp) {
    if (req.query != {}) {
        length = req.query.time;
    } else {
        resp.status(400);
    }
});

//sending instructions but letting board count for itself
/*app.post("/timer", function(req, resp) {
    if (req.query != {}) {
        let query = req.query.go;
        if (query == 'true') {
            go = true;
        } else if (query == 'false') {
            go = false;
        } else {
            console.log("something is wrong here");
        }
    } else {
        resp.status(400);
    }
});*/

app.post("/homescore", function(req, resp) {
    if (req.query != {}) {
        homeScore = req.query.home;
    } else {
        resp.status(400);
    }
});

app.post("/awayscore", function(req, resp) {
    if (req.query != {}) {
        awayScore = req.query.away;
    } else {
        resp.status(400);
    }
});

app.post("/homename", function(req, resp) {
    if (req.query != {}) {
        homeName = req.query.home;
    } else {
        resp.status(400);
    }
});

app.post("/awayname", function(req, resp) {
    if (req.query != {}) {
        awayName = req.query.away;
    } else {
        resp.status(400);
    }
});

app.post("/period", function(req, resp) {
    if (req.query != {}) {
        period = req.query.period;
    } else {
        resp.status(400);
    }
});

// get

app.get("/time", function(req, resp) {
    try {
        resp.json({ message: event });
    } catch (error) {
        resp.status(500);
    }
});

app.get("/length", function(req, resp) {
    try {
        resp.json({ message: length });
    } catch (error) {
        resp.status(500);
    }
});

app.get("/home", function(req, resp) {
    try {
        resp.json({ message: homeScore });
    } catch (error) {
        resp.status(500);
    }
});

app.get("/away", function(req, resp) {
    try {
        resp.json({ message: awayScore });
    } catch (error) {
        resp.status(500);
    }
});

app.get("/homename", function(req, resp) {
    try {
        resp.json({ message: homeName });
    } catch (error) {
        resp.status(500);
    }
});

app.get("/awayname", function(req, resp) {
    try {
        resp.json({ message: awayName });
    } catch (error) {
        resp.status(500);
    }
});

app.get("/period", function(req, resp) {
    try {
        resp.json({ message: period });
    } catch (error) {
        resp.status(500);
    }
});

module.exports = app;