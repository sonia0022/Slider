let thumbnail = document.getElementsByClassName('thumbnail')
let activeImg = document.getElementsByClassName('active')

// Define the images array
let images = [];
for (let i = 0; i < thumbnail.length; i++) {
    images.push(thumbnail[i].src);
}

let currentIndex = 0;

for (var i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener('click', function () {
        if (activeImg.length > 0) {
            activeImg[0].classList.remove('active')
        }
        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}

function next() {
    var currentImg = document.getElementById("featured");
    var thumbnails = document.querySelectorAll('.thumbnail');
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
    }
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    thumbnails[currentIndex].classList.add('active');
    currentImg.src = images[currentIndex];
}

function prev() {
    var currentImg = document.getElementById("featured");
    var thumbnails = document.querySelectorAll('.thumbnail');
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
    }
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    thumbnails[currentIndex].classList.add('active');
    currentImg.src = images[currentIndex];
}

