// JavaScript to toggle menu visibility
document.getElementById("menu-toggle").addEventListener("click", function() {
    const nav = document.querySelector("header nav");
    nav.classList.toggle("show"); // Toggle the 'show' class
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let autoSlideInterval;

// Function to go to the next slide automatically
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(slideIndex + 1); // Move to the next slide
    }, 3000); // Slides change every 3 seconds
}

// Function to reset the auto-slide when there is user interaction
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

document.querySelector('.next-btn').addEventListener('click', () => {
    showSlide(slideIndex + 1);
    resetAutoSlide(); // Reset auto-slide on button click
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    showSlide(slideIndex - 1);
    resetAutoSlide(); // Reset auto-slide on button click
});

// Add click events to dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideToGo = parseInt(dot.getAttribute('data-slide'));
        showSlide(slideToGo);
        resetAutoSlide(); // Reset auto-slide on dot click
    });
});

function showSlide(index) {
    // Proper wrap-around logic for the slide index
    slideIndex = (index + totalSlides) % totalSlides;

    // Remove the active class from the current slide and dot
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add the active class to the new slide and dot
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');

    // Move the slides container
    const carouselSlides = document.querySelector('.carousel-slides');
    carouselSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Initially show the first slide
showSlide(slideIndex);

// Start auto-sliding when the page loads
startAutoSlide();


