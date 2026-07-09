function output() {
    let zahl1 = 50;
    let zahl2 = 50;

    // Checken, ob zahl1 oder zahl2 größer
    // Anwort ist IMMER 1 oder 0, ja oder nein, wahr oder falsch
    // wenn ja dann if
    // 1. Frage / Bedingung
    if (zahl1 > zahl2) {
        document.getElementById('js-output').innerHTML = 'zahl1 ist größer';
    }
    // 2. Frage / Bedingung (wichtig == als Vergleich)
    else if (zahl1 == zahl2) {
        document.getElementById('js-output').innerHTML = 'zahl 1 und zahl 2 sind gleich';
    }
    // sonst else
    else {
        document.getElementById('js-output').innerHTML = 'zahl2 ist größer';
    }
    
}


function output1() {
    let zahl1 = 30;
    let zahl2 = 55;

    // Checken, ob zahl1 oder zahl2 größer
    // Anwort ist IMMER 1 oder 0, ja oder nein, wahr oder falsch
    // wenn ja dann if
    if (zahl1 > zahl2){
        document.getElementById('js-output').innerHTML = zahl1;
    }
    // sonst else
    else {
        document.getElementById('js-output').innerHTML = zahl2;
    }
    
}