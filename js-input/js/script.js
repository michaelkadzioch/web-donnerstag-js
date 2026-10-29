const btn = document.getElementById('btn');
const outputbox = document.getElementById('js-output');
const inputbox = document.getElementById('eingabefeld');
const colorpicker = document.getElementById('colorpicker');

const radioSmall = document.getElementById('radio-klein');
const radioMedium = document.getElementById('radio-mittel');
const radioBig = document.getElementById('radio-gross');

const size = document.getElementById('size');
const datum = document.getElementById('datum');


btn.addEventListener('click', function() {
    outputbox.innerHTML = inputbox.value;
    outputbox.style.color = colorpicker.value;
    outputbox.style.borderColor = colorpicker.value;

    inputbox.value = null;

    if (radioSmall.checked == true){
        outputbox.style.fontSize = '0.5em';
    };

    if (radioMedium.checked == true){
        outputbox.style.fontSize = '1em';
    };

    if (radioBig.checked == true){
        outputbox.style.fontSize = '2em';
    };

    console.log(datum.value);
});


colorpicker.addEventListener('change', function() {
    outputbox.style.color = colorpicker.value;
    outputbox.style.borderColor = colorpicker.value;
});


size.addEventListener('change', function() {
    console.log(size.value);
    outputbox.style.fontSize = size.value + 'px';
}); 