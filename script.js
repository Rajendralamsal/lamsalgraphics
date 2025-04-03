// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 2500);

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.width = '15px';
        cursor.style.height = '15px';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
    
    // Add hover effect to links and buttons
    const links = document.querySelectorAll('a, button, .filter-btn, .service-card');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.style.width = '0';
            cursor.style.height = '0';
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
            cursorFollower.style.borderColor = 'rgba(255, 51, 102, 0.8)';
            cursorFollower.style.backgroundColor = 'rgba(255, 51, 102, 0.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
            cursorFollower.style.borderColor = 'rgba(255, 51, 102, 0.5)';
            cursorFollower.style.backgroundColor = 'transparent';
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Portfolio filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter work items
            workItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 200);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 500);
                }
            });
        });
    });

    // Testimonial slider
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const slideWidth = 100; // 100%
    
    // Set initial position
    testimonialTrack.style.transform = `translateX(0%)`;
    
    // Update dots
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Go to slide
    function goToSlide(index) {
        currentSlide = index;
        testimonialTrack.style.transform = `translateX(-${slideWidth * currentSlide}%)`;
        updateDots();
    }
    
    // Next slide
    nextButton.addEventListener('click', function() {
        if (currentSlide < testimonialSlides.length - 1) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(0);
        }
    });
    
    // Previous slide
    prevButton.addEventListener('click', function() {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        } else {
            goToSlide(testimonialSlides.length - 1);
        }
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
    });
    
    // Auto slide
    setInterval(function() {
        if (currentSlide < testimonialSlides.length - 1) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(0);
        }
    }, 5000);

    // Animate stats counter
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 16ms per frame (approx 60fps)
            let current = 0;
            
            const counter = setInterval(function() {
                current += step;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
    
    // Trigger stats animation when in viewport
    const aboutSection = document.querySelector('.about');
    
    window.addEventListener('scroll', function() {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (aboutPosition < screenPosition) {
            animateStats();
            // Remove event listener after animation is triggered
            this.removeEventListener('scroll', arguments.callee);
        }
    });

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Simulate form submission
                const submitBtn = document.querySelector('.submit-btn');
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(function() {
                    contactForm.reset();
                    submitBtn.textContent = 'Message Sent!';
                    
                    setTimeout(function() {
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;
                    }, 3000);
                }, 2000);
            }
        });
    }

    // Animate on scroll
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('aos-animate');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});

// Add AOS (Animate On Scroll) classes
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        element.classList.add('aos-init');
        
        // Add transition based on delay
        const delay = element.getAttribute('data-aos-delay') || 0;
        element.style.transitionDelay = `${delay}ms`;
    });
});

// Define AOS animations
document.head.insertAdjacentHTML('beforeend', `
    <style>
        [data-aos] {
            opacity: 0;
            transform: translateY(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        [data-aos].aos-animate {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`);