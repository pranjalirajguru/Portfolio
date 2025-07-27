document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".top-nav a");
  const sections = document.querySelectorAll(".page-section");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");

      sections.forEach(section => section.classList.remove("active"));

      const showSection = document.getElementById(target);
      if (showSection) {
        showSection.classList.add("active");
      }
    });
  });

  // ✅ Certificate animation on visibility
  const certSection = document.querySelector('.certifications-section');

  if (certSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.cert-card');
          cards.forEach(card => {
            card.classList.remove('reanimate');
            void card.offsetWidth;
            card.classList.add('reanimate');
          });
        }
      });
    }, { threshold: 0.3 });

    observer.observe(certSection);
  }
});

