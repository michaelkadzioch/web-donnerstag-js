const image = document.getElementById('slideshow-image');

const imageDir = 'images/';
const imageList = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg', 'foto6.jpg'];

let position = 0;
let time = 3000;

image.src =  imageDir + imageList[position];

setInterval(function() {
    changeImage();
}, time);

function changeImage() {
    position += 1;

    if (position >= imageList.length){
        position = 0;
    }

    image.src =  imageDir + imageList[position];
}