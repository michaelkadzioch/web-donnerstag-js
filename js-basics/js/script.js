function output() {

    let outputtext = '';

    outputtext = outputtext + 'Rechnung: ' + rechnen(10, 5) + '<br>';
    outputtext = outputtext + 'Rechnung: ' + rechnen(30, 8) + '<br>';
    outputtext = outputtext + 'Rechnung: ' + rechnen(140, 17) + '<br>';
    outputtext = outputtext + 'Rechnung: ' + rechnen(78, 5) + '<br>';
    document.getElementById('js-output').innerHTML = outputtext;
}


// Function mit Eingabewerten bzw. Parameter
// und Return-Wert
function rechnen(zahl1, zahl2) {

    let ergebnis;
    ergebnis = zahl1 + zahl2;

    return ergebnis;
}


function output5() {
    // Scheife mit Bedingung

    let wert = 1000;
    let i = 0;

    while (wert >= 100) {
        wert -= 3;
        i++;
    }

    document.getElementById('js-output').innerHTML = 'Der wert ist: ' + wert + ' Die Scheife ist gelaufen: ' + i;
}


function output4() {

    // Einmaleins als Schleife

    let outputText = '';
    let zahl = 17;
    let ergebnis;

    for (let i = 1; i <= 10; i += 1) {

        ergebnis = zahl * i;

        outputText += zahl + ' mal ' + i + ' ist gleich ' + ergebnis + '<br>';

        if (i < 0) {
            outputText = 'falsche Richtung'
            break;
        }
    }   
    
    document.getElementById('js-output').innerHTML = outputText; 
}



function output3() {
    let outputText = '';

    for (let i = 0; i < 100; i ++) {
        outputText += 'Hallo ';

        if (i < 0) {
            outputText += 'falsche Richtung'
            break;
        }
    }
   
    
    document.getElementById('js-output').innerHTML = outputText; 
}



function output2() {
    let zahl1 = 50;
    let zahl2 = 80;

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

