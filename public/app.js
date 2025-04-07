document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#a29bfe" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#6c5ce7", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  
    // Initialize tilt.js on cards
    $('.feature-card').tilt({
      glare: true,
      maxGlare: 0.2,
      maxTilt: 10,
      perspective: 1000
    });
  
    // Add hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.icon').style.transform = 'scale(1.2) rotate(10deg)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.querySelector('.icon').style.transform = 'scale(1) rotate(0)';
      });
    });
  });