// Portfolio Website - Main JavaScript File

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update active nav state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // Highlight active section on scroll
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveSection() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === `#${section.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Throttle scroll event for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Intersection Observer for animations on scroll
  const animatedElements = document.querySelectorAll('.project-card, .skill-category, .contact-item');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const animatedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animatedObserver.observe(element);
  });

  // Contact form handling (prevent default submission for demo)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      console.log('Form submitted:', { name, email, message });
      
      // Show success message (you can replace this with actual form submission)
      alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
      
      contactForm.reset();
    });
  }

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.boxShadow = 'var(--shadow-md)';
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-sm)';
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });

  // Add current year to footer
  const footerYear = document.querySelector('.footer');
  if (footerYear && footerYear.textContent.includes('2026')) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
  }
});

// Add to all project cards for additional animation
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
  });

  const observerOptions = { threshold: 0.1 };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  projectCards.forEach(card => observer.observe(card));
});