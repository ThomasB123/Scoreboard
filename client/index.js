// All times in seconds
var timer = document.getElementById('timer');
var totalTime = 2100;
var startTime = 0;
var timePassed = 0;
var pauseWhen = 120;

var go = false;
var paused;

/*function setTime(time) {
    totalTime = time;
    startTime = millis();
    timePassed = floor((millis() - startTime) / 1000);
    timer.innerHTML = convertSeconds(totalTime - timePassed);
}*/

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
    noCanvas();
    startTime = millis();
    //paused = millis();
    timer.innerHTML = convertSeconds(totalTime - timePassed);
}
var interval = setInterval(timeIt, 1000);

function timeIt() {
    if (go) {
        timePassed = floor((millis() - startTime) / 1000);
        timer.innerHTML = convertSeconds(totalTime - timePassed);
        if (timePassed + pauseWhen == totalTime) {
            clearInterval(interval);
        }
    }
}

function play() {
    go = true;
    startTime = millis();
    //var interval = setInterval(timeIt, 1000);
    //startTime += timePassed;
}

function pause() {
    go = false;
    //paused = millis();
}

function reset() {
    startTime = millis();
    timePassed = floor((millis() - startTime) / 1000);
    timer.innerHTML = convertSeconds(totalTime - timePassed);
}

var address = 'http://192.168.168.171:8080/';
// var address = http://127.0.0.1:8080/;

var homeScore = 0;
var awayScore = 0;

//All fetches are 'POST', sending data to the server.

async function time(event) {
    try {
        if (event == 'play') {
            play();
        } else if (event == 'pause') {
            pause();
        } else if (event == 'reset') {
            reset();
        } else {
            console.log("something is wrong here");
        }
        let response = await fetch(address + 'time?event=' + event, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}
async function setTime(time) {
    try {
        totalTime = time;
        startTime = millis();
        timePassed = floor((millis() - startTime) / 1000);
        timer.innerHTML = convertSeconds(totalTime - timePassed);
        let response = await fetch(address + 'length?time=' + time, {
            method: 'POST'
        });
    } catch (error) {
        // console.log("problem");
    }
}

async function home_plus() {
    try {
        homeScore++;
        document.getElementById('home-score-controls').innerHTML = homeScore;
        let response = await fetch(address + 'homescore?home=' + homeScore, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}

async function home_minus() {
    try {
        homeScore--;
        document.getElementById('home-score-controls').innerHTML = homeScore;
        let response = await fetch(address + 'homescore?home=' + homeScore, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}

async function away_plus() {
    try {
        awayScore++;
        document.getElementById('away-score-controls').innerHTML = awayScore;
        let response = await fetch(address + 'awayscore?away=' + awayScore, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}

async function away_minus() {
    try {
        awayScore--;
        document.getElementById('away-score-controls').innerHTML = awayScore;
        let response = await fetch(address + 'awayscore?away=' + awayScore, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}

async function home_name(event) {
    event.preventDefault();
    try {
        let name = document.getElementById('home-name').value;
        document.getElementById("home-team").innerHTML = name;
        let response = await fetch(address + 'homename?home=' + name, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}

async function away_name(event) {
    event.preventDefault();
    try {
        let name = document.getElementById('away-name').value;
        document.getElementById("away-team").innerHTML = name;
        let response = await fetch(address + 'awayname?away=' + name, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}

async function section(period) {
    try {
        document.getElementById("period-controls").innerHTML = period;
        let response = await fetch(address + 'period?period=' + period, {
            method: 'POST'
        });
    } catch (error) {
        //console.log("problem");
    }
}