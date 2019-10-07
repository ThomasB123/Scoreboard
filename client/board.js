var address = 'http://192.168.1.3:8080/';
//var address = 'http://192.168.168.171:8080/';
// var address = 'http://127.0.0.1:8080/';

/*
Everything between the comment lines is the same in both board.js and index.js

board.js has all the same functions as index.js does,
when board.js makes GET requests to the server app.js
it just gets which function to run that has also been run by index.js
on the controls side.
*/

//////////////////////////////////////////////////////////////////////
// All times in seconds
var timer = document.getElementById('timer');
var totalTime = 2100;
var startTime = 0;
var timePassed = 0;
var pauseWhen = 120;

var paused = 0;
var go = false;

function setTime(time) {
    totalTime = time;
    startTime = millis();
    timePassed = floor((millis() - startTime) / 1000);
    timer.innerHTML = convertSeconds(totalTime - timePassed);
}

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
    noCanvas();
    startTime = millis();
    timer.innerHTML = convertSeconds(totalTime - timePassed);
}
var interval = setInterval(timeIt, 1000); // this decides how often we are checking the server for any updates (in milliseconds)

function timeIt() {
    if (go) {
        timePassed = floor((millis() - startTime) / 1000);
        timer.innerHTML = convertSeconds(totalTime - timePassed + paused);
        if (timePassed + pauseWhen == totalTime) {
            clearInterval(interval);
        }
    } else {
        paused++;
    }
}

function play() {
    go = true;
}

function pause() {
    go = false;
}

function reset() {
    paused = 0;
    startTime = millis();
    timePassed = floor((millis() - startTime) / 1000);
    timer.innerHTML = convertSeconds(totalTime - timePassed);
}
//////////////////////////////////////////////////////////////////////

var homeScore = 0;
var awayScore = 0;
var homeName = "Wakefield";
var awayName = "Other Team";
var period = "VS";

// All fetches are 'GET', asking for data from the server.

async function time() {
    try {
        let response = await fetch(address + 'time', {
            method: 'GET'
        });
        let text = await response.text();
        let event = JSON.parse(text).message;
        if (event == 'play') {
            // and timer is not already playing
            if (!go) {
                play();
            }
        } else if (event == 'pause') {
            pause();
        } else if (event == 'reset') {
            reset();
        }
    } catch (error) {
        console.log("timer didn't work");
    }
}
async function length(time) {
    try {
        let response = await fetch(address + 'length', {
            method: 'GET'
        });
        let text = await response.text();
        let length = JSON.parse(text).message;
        if (totalTime != length) { // if new time is different to old time, i.e. it has changed
            setTime(length);
        }
    } catch (error) {
        console.log("length didn't work");
    }
}

async function getHomeScore() {
    try {
        let response = await fetch(address + 'home', {
            method: 'GET'
        });
        let text = await response.text();
        homeScore = JSON.parse(text).message;
    } catch (error) {
        console.log("home score didn't work");
    }
}

async function getAwayScore() {
    try {
        let response = await fetch(address + 'away', {
            method: 'GET'
        });
        let text = await response.text();
        awayScore = JSON.parse(text).message;
    } catch (error) {
        console.log("away score didn't work");
    }
}

async function getHomeName() {
    try {
        let response = await fetch(address + 'homename', {
            method: 'GET'
        });
        let text = await response.text();
        homeName = JSON.parse(text).message;
    } catch (error) {
        console.log("home name didn't work");
    }
}

async function getAwayName() {
    try {
        let response = await fetch(address + 'awayname', {
            method: 'GET'
        });
        let text = await response.text();
        awayName = JSON.parse(text).message;
    } catch (error) {
        console.log("away name didn't work");
    }
}

async function getPeriod() {
    try {
        let response = await fetch(address + 'period', {
            method: 'GET'
        });
        let text = await response.text();
        period = JSON.parse(text).message;
    } catch (error) {
        console.log("period didn't work");
    }
}

function update() {
    time();
    length();
    getHomeScore();
    getAwayScore();
    document.getElementById('home-score-board').innerHTML = homeScore;
    document.getElementById('away-score-board').innerHTML = awayScore;
    getHomeName();
    getAwayName();
    document.getElementById('home-name-board').innerHTML = homeName;
    document.getElementById('away-name-board').innerHTML = awayName;
    getPeriod();
    document.getElementById('period-board').innerHTML = period;
}

var interval = setInterval(update, 1000);