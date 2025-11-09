// assets/js/script.js

document.addEventListener("DOMContentLoaded", () => {
  // --- Logic untuk Menu Hamburger ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // --- Logic untuk Animasi Fade-in saat Scroll ---
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  };

  const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

  fadeElements.forEach((el) => {
    intersectionObserver.observe(el);
  });
});
