const boxHour = document.getElementById('stunde');
const boxMinute = document.getElementById('minute');
const boxSecond = document.getElementById('sekunde');

const boxDay = document.getElementById('tag');
const boxMonth = document.getElementById('monat');
const boxYear = document.getElementById('jahr');

const boxDebug = document.getElementById('debug-output');

let sec = 0;

boxHour.innerHTML = 19;
boxMinute.innerHTML = 0;
boxSecond.innerHTML = sec;
boxDay.innerHTML = 333;
boxMonth.innerHTML = 77;
boxYear.innerHTML = 2345;

const date = new Date();

boxDebug.innerHTML = date;


// setInterval(function() {
//     sec += 1;
//     boxSecond.innerHTML = sec;
// }, 1000);