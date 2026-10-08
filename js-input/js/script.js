const btn = document.getElementById('btn');
const outputbox = document.getElementById('js-output');
const inputbox = document.getElementById('eingabefeld');
const colorpicker = document.getElementById('colorpicker');

const radioSmall = document.getElementById('radio-klein');
const radioMedium = document.getElementById('radio-mittel');
const radioBig = document.getElementById('radio-gross');




btn.addEventListener('click', function() {
    outputbox.innerHTML = inputbox.value;
    outputbox.style.color = colorpicker.value;
    outputbox.style.borderColor = colorpicker.value;

    inputbox.value = null;

    console.log(radioMedium.value);
});


colorpicker.addEventListener('change', function() {
    outputbox.style.color = colorpicker.value;
    outputbox.style.borderColor = colorpicker.value;
});