// script.js

// Button Click
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
  alert("Welcome to Our Planet! 🌍 Let's begin the journey.");
});

// Hover Effect
const hoverZone = document.getElementById('hoverZone');
hoverZone.addEventListener('mouseover', () => {
  hoverZone.style.backgroundColor = '#d1f7e7';
  hoverZone.textContent = "You're hovering over a majestic part of Earth!";
});
hoverZone.addEventListener('mouseout', () => {
  hoverZone.style.backgroundColor = '#f0fdf4';
  hoverZone.textContent = "Hover over Earth's wonders";
});

// Keypress Detection
const typeField = document.getElementById('typeField');
typeField.addEventListener('keypress', (e) => {
  console.log(`You typed: ${e.key}`);
});

// Theme Toggle
const themeChange = document.getElementById('themeChange');
themeChange.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Slideshow
const slideshowImages = [
  "https://via.placeholder.com/300x200?text=Rainforest",
  "https://via.placeholder.com/300x200?text=Coral+Reef",
  "https://via.placeholder.com/300x200?text=Savannah",
];
let currentImage = 0;
setInterval(() => {
  currentImage = (currentImage + 1) % slideshowImages.length;
  document.getElementById('ecosystemImg').src = slideshowImages[currentImage];
}, 3000);

// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(tab.dataset.target).classList.remove('hidden');
  });
});

// Form Validation
const form = document.getElementById('pledgeForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailMsg = document.getElementById('emailMsg');
const passMsg = document.getElementById('passMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  // Email Validation
  if (!emailInput.value.includes('@')) {
    emailMsg.textContent = 'Please enter a valid email address.';
    valid = false;
  } else {
    emailMsg.textContent = '';
  }

  // Password Validation
  if (passwordInput.value.length < 8) {
    passMsg.textContent = 'Password must be at least 8 characters.';
    valid = false;
  } else {
    passMsg.textContent = '';
  }

  if (valid) {
    alert('Thank you for your pledge to protect our planet! 🌱');
    form.reset();
  }
});
