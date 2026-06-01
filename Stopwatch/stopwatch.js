let stopwatch = document.getElementById("stopwatch");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let mili = 0;
let seconds = 0;
let minute = 0;
let hour = 0;
let timer = false;

start.addEventListener("click", function () {
  timer = true;
  watch();
});

stop.addEventListener("click", function () {
  timer = false;
});

reset.addEventListener("click", function () {
  seconds = 0;
  minute = 0;
  hour = 0;
  mili = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minute").innerHTML = ":00";
  document.getElementById("second").innerHTML = ":00";
  document.getElementById("mili").innerHTML = ":00";
  timer = false;
});

function watch() {
  if (timer) {
    mili++;
    if (mili >= 100) {
      seconds++;
      mili = 0;
    }
    if (seconds >= 60) {
      minute++;
      seconds = 0;
    }
    if (minute >= 60) {
      hour++;
      minute = 0;
      seconds = 0;
    }
    let hr = hour;
    let min = minute;
    let sec = seconds;
    let mil = mili;

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = ":" + min;
    document.getElementById("second").innerHTML = ":" + sec;
    document.getElementById("mili").innerHTML = ":" + mil;
    setTimeout(watch, 10);
  }
}
