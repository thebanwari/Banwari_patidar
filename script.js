// Script for dark/light mode toggle and storing preference in localStorage
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-links a');

// Load theme from localStorage or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-mode');
    toggleButton.textContent = '🌙';
  } else {
    body.classList.remove('light-mode');
    toggleButton.textContent = '☀️';
  }
  localStorage.setItem('theme', theme);
}

applyTheme(currentTheme);

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }
});

// Highlight active page link
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Smooth Scroll is handled by CSS scroll-behavior: smooth in body

// Optional: add subtle animations on icons/project cards are handled by CSS transitions already
