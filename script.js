// script.js

// Mobile Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const navUl = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
    burgerMenu.classList.toggle('active'); // Toggle active class on burger menu
});


// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, // Scroll to the top of the section
                behavior: 'smooth' // Use smooth scrolling
            });

            // Close mobile menu after clicking a link (if it's open)
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
        }
    });
});


// Testimonial Slider (Basic Example - you can use a library for more advanced features)
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block'; // Or use a transition for smoother effect
        } else {
            testimonial.style.display = 'none';
        }
    });
}

// Simple auto-advance (you can customize this)
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000); // Change testimonial every 5 seconds


// Initialize the first testimonial
showTestimonial(currentTestimonial);


// Form Validation (Example - adapt to your actual form)
const bookingForm = document.querySelector('#booking-form'); // Replace with your form ID

if (bookingForm) { // Check if the form exists on the page
  bookingForm.addEventListener('submit', (event) => {
    let isValid = true;

    // Example: Check if name field is empty
    const nameField = document.querySelector('#name'); // Replace with your name field ID
    if (nameField.value.trim() === '') {
      alert('Please enter your name.');
      nameField.focus();
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
}