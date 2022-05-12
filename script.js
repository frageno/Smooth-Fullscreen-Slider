let activeSlide = 0;

const prevBtn = document.getElementById('prevButton');
const nextBtn = document.getElementById('nextButton');
const slideContainer = document.querySelector('.slides');
const slides = slideContainer.children;

// Previous slide
const prevSlide = () => {
    if (activeSlide > 0) {
        activeSlide -= 1;
        update();
    }
}

// Next slide
const nextSlide = () => {
    if(slides[activeSlide + 1]){
        activeSlide += 1;
        update();
    }
}

// Update slide
const update = () => {
    slideContainer.style.marginLeft = `-${activeSlide}00vw`;
    let activeSlideElement = document.querySelector('.active.slide');
    activeSlideElement.classList.remove('active');
    slides[activeSlide].classList.add('active');

}

// Events

const attachEvents = () => {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

attachEvents();