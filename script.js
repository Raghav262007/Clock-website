const stopwatch = document.getElementById("stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var stoptime = true;
var interval;

function stopwatchCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    msec = parseInt(msec);

    msec += 1;

    if (msec == 100) {
      sec = sec + 1;
      msec = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (msec < 10 /*|| msec == 0*/) {
      msec = "0" + msec;
    }
    if (sec < 10 /*|| sec == 0*/) {
      sec = "0" + sec;
    }
    if (min < 10 /*|| min == 0*/) {
      min = "0" + min;
    }
    if (hr < 10 /*|| hr == 0*/) {
      hr = "0" + hr;
    }

    stopwatch.innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
  }
}

function startStopwatch() {
  if (stoptime == true) {
    stoptime = false;
    interval = setInterval(stopwatchCycle, 10);
  }
}

function stopStopwatch() {
  if (stoptime == false) {
    stoptime = true;
    clearInterval(interval);
  }
}

function resetStopwatch() {
  stopwatch.innerHTML = "00:00:00:00";
  stoptime = true;
  clearInterval(interval);
  hr = 0;
  sec = 0;
  min = 0;
  msec = 0;

  var Laps = document.getElementById("lapButton");
  Laps.innerHTML = "Laps";
}

function lapTimer() {
  if (stoptime === false) {
    stopwatch.innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
    var Laps = document.getElementById("lapButton");
    Laps.innerHTML += "<div>" + "<br>" + " " + stopwatch.innerHTML + "</div>";

    if (msec < 10 || msec == 0) {
      msec = "0" + msec;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }
  }
}
