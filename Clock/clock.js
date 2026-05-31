let clock = document.getElementById("clock");
function liveclock() {
  let clocknow = new Date();
  let hour = clocknow.getHours();
  let minute = clocknow.getMinutes();
  let seconds = clocknow.getSeconds();
  minute = leadingzero(minute);
  seconds = leadingzero(seconds);

  clock.innerHTML = hour + ":" + minute + ":" + seconds;
  setTimeout(liveclock, 1000);
}
liveclock();

function leadingzero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
