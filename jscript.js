
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tab");

    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Hide all content
    tabContents.forEach(content => content.classList.remove("active"));

    // Show selected content
    document.getElementById(target).classList.add("active");
  });
});

let currentIndex = 0;
const carousel = document.querySelector('.cert-carousel');
const slides = carousel.querySelectorAll('.carousel-item');

function showSlide(index) {
  if(index >= slides.length) currentIndex = 0;
  else if(index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100; // Move the slides
  carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Select all navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Select all sections you want to track
const sections = {
    black: ['home', 'projects', 'contact', 'about'], // text black
    white: ['services', 'certifications']            // text white
};

// Function to change navbar link color based on scroll
function updateNavbarColor() {
    const scrollY = window.scrollY + window.innerHeight / 2; // middle of viewport

    // Check each section
    let newColor = 'black'; // default
    for (const color in sections) {
        for (const id of sections[color]) {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    newColor = color === 'black' ? 'black' : 'white';
                }
            }
        }
    }

    // Apply color to navbar links
    navLinks.forEach(link => {
        link.style.color = newColor;
    });
}

// Run on scroll
window.addEventListener('scroll', updateNavbarColor);

// Run once on load
updateNavbarColor();