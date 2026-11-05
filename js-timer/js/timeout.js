setTimeout(textOutput1, 5000);
setTimeout(textOutput2, 7000);


function textOutput1() {
    document.getElementById('js-output').innerHTML = 'Hallo Welt!';
}

function textOutput2() {
    document.getElementById('js-output').innerHTML = 'das ist JS';
}