function output() {
    let zahl1;
    let zahl2;
    let ergebnis;

    zahl1 = 5;
    zahl2 = 10;

    // Erst wird gerechnet, dann wird zugewiesen
    ergebnis = zahl1 + zahl2;

    // Erst wird gerechnet, dann wird zugewiesen
    ergebnis = ergebnis + 3;

    // Kürzere Syntax in JS
    ergebnis += 3;

    document.getElementById('js-output').innerHTML = ergebnis;
}



function output1() {
    // Variable wird definiert
    let ausgabetext;

    // Variable initalisieren
    ausgabetext = 'Hallo Welt!';

    // Variable überschreiben
    ausgabetext = 'Ich bin ein neuer Text!';


    document.getElementById('js-output').innerHTML = ausgabetext;
}