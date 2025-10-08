// ======= Select Elements =======
const body = document.body;
const toggleButton = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// ======= Load Theme from localStorage or default =======
const currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-mode");
    toggleButton.textContent = "🌙";
  } else {
    body.classList.remove("light-mode");
    toggleButton.textContent = "☀️";
  }
  localStorage.setItem("theme", theme);
}

applyTheme(currentTheme);

// ======= Theme Toggle Button =======
toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
});

// ======= Mobile Menu Toggle =======
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// ======= Highlight Active Page Link =======
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// ======= Smooth Scroll handled by CSS =======
// (scroll-behavior: smooth in CSS)
