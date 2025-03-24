// Main JavaScript for Lamsal Graphics Website
function initMainContent() {
  // DOM Elements
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const backToTopBtn = document.getElementById('back-to-top');
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');
  const currentYearSpan = document.getElementById('current-year');
  
  // Set current year in footer
  currentYearSpan.textContent = new Date().getFullYear();
  
  // Mobile Menu Toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mobileNav.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Back to top functionality
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Create floating shapes for hero section
  const floatingShapes = document.querySelector('.floating-shapes');
  const colors = ['#ff6b6b', '#4ecdc4', '#ffbe76', '#ff7979', '#badc58'];
  
  for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    shape.classList.add('floating-shape');
    
    // Random properties
    const size = Math.random() * 100 + 50;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.backgroundColor = color;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.animationDuration = `${Math.random() * 20 + 10}s`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    
    floatingShapes.appendChild(shape);
  }
  
  // Portfolio filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          gsap.to(item, { opacity: 1, scale: 1, duration: 0.5 });
          item.style.display = 'block';
        } else {
          gsap.to(item, { 
            opacity: 0, 
            scale: 0.8, 
            duration: 0.5,
            onComplete: () => {
              item.style.display = 'none';
            }
          });
        }
      });
    });
  });
  
  // Portfolio Modal
  const portfolioLinks = document.querySelectorAll('.portfolio-link');
  const modal = document.getElementById('portfolio-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.querySelector('.close-modal');
  
  portfolioLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const portfolioItem = link.closest('.portfolio-item');
      const image = portfolioItem.querySelector('img').src;
      const title = portfolioItem.querySelector('h3').textContent;
      const category = portfolioItem.querySelector('p').textContent;
      
      modalImage.src = image;
      modalTitle.textContent = title;
      modalCategory.textContent = category;
      modalDescription.textContent = "Detailed description of this project will be displayed here. This includes information about the client, project requirements, challenges, and solutions provided.";
      
      modal.style.display = 'flex';
      gsap.fromTo(modal, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 });
      
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal
  function closePortfolioModal() {
    gsap.to(modal, { 
      opacity: 0, 
      duration: 0.3,
      onComplete: () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  closeModal.addEventListener('click', closePortfolioModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePortfolioModal();
    }
  });
  
  // Testimonial Slider
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const sliderDots = document.querySelector('.slider-dots');
  
  let currentSlide = 0;
  const totalSlides = testimonialItems.length;
  
  // Create dots
  testimonialItems.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
    
    sliderDots.appendChild(dot);
  });
  
  const dots = document.querySelectorAll('.dot');
  
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  function goToSlide(index) {
    currentSlide = index;
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    } else {
      goToSlide(totalSlides - 1);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    } else {
      goToSlide(0);
    }
  });
  
  // Auto slide
  let slideInterval = setInterval(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    } else {
      goToSlide(0);
    }
  }, 5000);
  
  // Pause auto slide on hover
  testimonialTrack.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  testimonialTrack.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
      } else {
        goToSlide(0);
      }
    }, 5000);
  });
  
  // Contact Form with EmailJS
  function initEmailJS() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  }
  
  if (typeof emailjs !== 'undefined') {
    initEmailJS();
  }
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // If EmailJS is available, use it to send the email
    if (typeof emailjs !== 'undefined') {
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'lamsayush1@gmail.com'
      };
      
      emailjs.send('default_service', 'template_id', templateParams)
        .then(() => {
          contactForm.reset();
          formSuccess.style.display = 'flex';
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
          
          setTimeout(() => {
            formSuccess.style.display = 'none';
          }, 5000);
        })
        .catch(() => {
          formError.style.display = 'flex';
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
          
          setTimeout(() => {
            formError.style.display = 'none';
          }, 5000);
        });
    } else {
      // Fallback if EmailJS is not available
      setTimeout(() => {
        contactForm.reset();
        formSuccess.style.display = 'flex';
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      }, 1500);
    }
  });
  
  // Initialize GSAP ScrollTrigger for animations
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // About section animations
    gsap.from('.about-image', {
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: -100,
      opacity: 0,
      duration: 1
    });
    
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: 100,
      opacity: 0,
      duration: 1
    });
    
    // Service cards animations
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
      });
    });
    
    // Portfolio items animations
    gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
      });
    });
    
    // Testimonial slider animation
    gsap.from('.testimonial-slider', {
      scrollTrigger: {
        trigger: '.testimonial-slider',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
    
    // Contact section animations
    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: -100,
      opacity: 0,
      duration: 1
    });
    
    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: '.contact-container',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: 100,
      opacity: 0,
      duration: 1
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.desktop-nav a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.desktop-nav a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// If the door animation is skipped or fails, ensure the main content loads
window.addEventListener('load', () => {
  setTimeout(() => {
    if (document.getElementById('main-content').classList.contains('hidden')) {
      document.getElementById('entrance-animation').style.display = 'none';
      document.getElementById('main-content').classList.remove('hidden');
      initMainContent();
    }
  }, 8000); // Fallback after 8 seconds
});