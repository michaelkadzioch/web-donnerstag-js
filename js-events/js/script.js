const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');

const title = document.getElementById('title');
const outputBox = document.getElementById('js-output');

const box1 = document.getElementById('box1');



// Events auf Elemente legen
button1.addEventListener('click', function() { 
    output('Hallo aus dem JavaScript');
});

button1.addEventListener('dblclick', function() { 
    output('du klickst zuviel');
});

button2.addEventListener('click', function() { 
    output('du hast einen button geklick');
});

button3.addEventListenerconst ('click', function() { 
    output('ich habe keine lust');
});

outputBox.addEventListener('dblclick', function() { 
    output('');
});

title.addEventListener('dblclick', function() { 
    // alles nur Spass
    output('Der PC wird sich in 5 Sekunden selbst zerstören!');
    title.innerHTML = 'Selbstzerstörung';
});


box1.addEventListener('mouseenter', function() { 
    output('du magst box 1');
});

box1.addEventListener('mouseleave', function() { 
    output('du magst box 1 nicht');
});




function output(outputtext = 'der text wurde vergessen') {

    outputBox.innerHTML = outputtext;
}




