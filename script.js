// Light/Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle && modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Filtering for Graphic Design Projects
const filterBar = document.getElementById('filterBar');
const projects = document.querySelectorAll('.project');
filterBar && filterBar.addEventListener('change', (e) => {
  const type = e.target.value;
  projects.forEach(proj => {
    const span = proj.querySelector('span[data-type]');
    const projType = span ? span.getAttribute('data-type') : '';
    if (type === 'all' || projType === type) {
      proj.style.display = '';
    } else {
      proj.style.display = 'none';
    }
  });
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.getElementById('nextTestimonial');
const prevBtn = document.getElementById('prevTestimonial');
function showTestimonial(idx) {
  testimonials.forEach((t, i) => {
    t.style.display = i === idx ? 'block' : 'none';
  });
}
if (testimonials.length) {
  showTestimonial(currentTestimonial);
  nextBtn && nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
  prevBtn && prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });
}
 // Typewriter Effect
    const titles = ["Web Designer", "Graphic Designer", "Data Analyst"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 120;
    const erasingSpeed = 60;
    const typewriter = document.getElementById("typewriter");

    function type() {
      if (charIndex < titles[index].length) {
        typewriter.textContent += titles[index].charAt(charIndex++);
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, 1500);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typewriter.textContent = titles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        index = (index + 1) % titles.length;
        setTimeout(type, 500);
      }
    }

    document.addEventListener("DOMContentLoaded", type);

    // Collapsible More Info
    function toggleMoreInfo() {
      const more = document.getElementById("moreInfo");
      more.style.display = more.style.display === "block" ? "none" : "block";
    }

    // Form Validation
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
      }
      alert("Message sent!");
      return true;
    }