const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    header.classList.toggle("mobile-open");
  });
}

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => header.classList.remove("mobile-open"));
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach((el) => observer.observe(el));

// Duplicate marquee content for smoother infinite scroll
document.querySelectorAll(".marquee-track").forEach((track) => {
  track.innerHTML += track.innerHTML;
});

// Gentle hero portrait parallax
const portrait = document.querySelector(".hero-portrait");
if (portrait) {
  window.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;
    portrait.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}
