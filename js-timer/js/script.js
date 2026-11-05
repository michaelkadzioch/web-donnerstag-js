let zahl = 0;

setInterval(textOutput, 200);


function textOutput() {
    document.getElementById('js-output').innerHTML = zahl;
    zahl += 1;
}

