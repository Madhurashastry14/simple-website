let clock = document.getElementById("clock");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const allMonth = [
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sepember",
  "October",
  "November",
  "December",
];

function liveclock() {
  let clocknow = new Date();
  let hour = clocknow.getHours();
  let minute = clocknow.getMinutes();
  let seconds = clocknow.getSeconds();

  let today = clocknow.getDate();
  let month = clocknow.getMonth();
  let year = clocknow.getFullYear();
  let day = clocknow.getDay();

  let daynow = weekday[day];
  let monthnow = allMonth[month];

  minute = leadingzero(minute);
  seconds = leadingzero(seconds);
  today = leadingzero(today);
  month = leadingzero(month);

  clock.innerHTML = `${hour} : ${minute} : ${seconds} <br> <span class="day">${today} ${monthnow}  ${year},</span> <span class="dayname">${daynow}</span> `;
  setTimeout(liveclock, 1000);
}
liveclock();

function leadingzero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
