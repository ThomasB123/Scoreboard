// All times in seconds
var totalTime = 2100;
var startTime = 0;
var timePassed = 0;
var pauseWhen = 120;

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
    noCanvas();
    var timer = select('#timer');
    startTime = millis();
    timer.html(convertSeconds(totalTime - timePassed));

    var interval = setInterval(timeIt, 1000);

    function timeIt() {
        timePassed = floor((millis() - startTime) / 1000);
        timer.html(convertSeconds(totalTime - timePassed));
        if (timePassed + pauseWhen == totalTime) {
            clearInterval(interval);
        }
    }
}