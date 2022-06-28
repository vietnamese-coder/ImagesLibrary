var images = document.querySelectorAll('.images img')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var close = document.querySelector('.gallery-close')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery-inner img')
var currentIndex = 0;

function galleryShow() {
    if (currentIndex == 0) {
        left.classList.add('hide')
    } else {
        left.classList.remove('hide')
    }

    if (currentIndex == images.length - 1) {
        right.classList.add('hide')
    } else {
        right.classList.remove('hide')
    }
    //display
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        galleryShow()
    })
})



close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

left.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--
        galleryShow()
    }
})

right.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++
        galleryShow()
    }
})