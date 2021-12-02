const bottonNext = document.querySelector('.botton-next')
const bottonPrevious = document.querySelector('.botton-previous')
const contentTexts = document.querySelectorAll('.content-text')
const contentImgs = document.querySelectorAll('.content-img')
const slidesCount = document.querySelectorAll('.content-text').length

console.log(slidesCount)

let activeSlideIndex = 0

bottonNext.addEventListener('click', () => {
    changeSlide('next')
})

bottonPrevious.addEventListener('click', () => {
    changeSlide('previous')
})

function changeSlide(direction) {
    if (direction === 'next') {
        removeContent()
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction ==='previous') {
        removeContent()
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    contentTexts[activeSlideIndex].classList.add('active-text')
    contentImgs[activeSlideIndex].classList.add('active-img')
}

function removeContent() {
    contentTexts[activeSlideIndex].classList.remove('active-text')
    contentImgs[activeSlideIndex].classList.remove('active-img')
}