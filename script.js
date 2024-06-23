let currentIndex = 0;
showSlides(currentIndex);

function navigate(direction) {
    showSlides(currentIndex += direction);
}

function currentSlide(index) {
    showSlides(currentIndex = index - 1);
}

function showSlides(index) {
    const slides = document.querySelectorAll(".gallery-slide");
    const dots = document.querySelectorAll(".dot");

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-100 * currentIndex}%)`;
        slide.style.opacity = i === currentIndex ? '1' : '0';
    });

    dots.forEach((dot, i) => {
        dot.className = dot.className.replace(" active", "");
        if (i === currentIndex) {
            dot.className += " active";
        }
    });
}
