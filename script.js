/*==========================================================
  ADVANCED JAVASCRIPT (script.js)
==========================================================*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true, // Only animate once on scroll down
        mirror: false, // Don't trigger when scrolling up
    });

    // 2. Preloader Logic
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            // Give a slight delay for assets to load and for the animation to be seen
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        });
    }

    // 3. Custom Cursor Logic (Disabled on touch devices via CSS media query)
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button, .filter-btn, .work-item, .menu-toggle');

    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        });

        links.forEach(link => {
            link.addEventListener('mouseenter', () => follower.classList.add('hovered'));
            link.addEventListener('mouseleave', () => follower.classList.remove('hovered'));
        });
    }

    // 4. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

    // 5. Portfolio Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    const workGrid = document.querySelector('.work-grid');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;

            // Update active button state
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Apply filter
            workItems.forEach(item => {
                const isVisible = filter === 'all' || item.classList.contains(filter);
                
                // Use a transition class for a fade effect
                item.style.opacity = isVisible ? 1 : 0;
                item.style.display = isVisible ? 'block' : 'none';

                // Re-calculate grid layout after filter
                if (isVisible) {
                    item.style.order = 0;
                } else {
                    item.style.order = 1; // Send hidden items to the end
                }
            });
        });
    });

    // 6. Navigation Scroll Active State
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    const updateActiveNav = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for fixed header
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);

    // Set initial active state on page load
    updateActiveNav();


    // 7. Stats Counter Animation
    const statsContainer = document.querySelector('.stats-container');
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateCount = (el) => {
        const target = parseInt(el.dataset.count);
        let count = 0;
        const speed = 20; // Lower is faster
        const increment = target / speed;

        const timer = setInterval(() => {
            count += increment;
            if (count > target) {
                el.innerText = target;
                clearInterval(timer);
            } else {
                el.innerText = Math.ceil(count);
            }
        }, 50);
    };

    const handleScroll = () => {
        if (statsContainer && !hasAnimated) {
            const rect = statsContainer.getBoundingClientRect();
            // Check if the element is in the viewport
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                statNumbers.forEach(animateCount);
                hasAnimated = true;
                window.removeEventListener('scroll', handleScroll);
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load for elements already in view

    // 8. Testimonial Slider
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dotsContainer = document.querySelector('.testimonial-dots');

    if (track && slides.length > 0) {
        let currentIndex = 0;
        const slideWidth = slides[0].clientWidth;

        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateDots();
        };

        const updateDots = () => {
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            });
        };

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });

        window.addEventListener('resize', updateSlider); // Recalculate on resize
        updateSlider(); // Initial display
    }

    // 9. Contact Form Submission (Placeholder)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real application, you would send this data to a server here.
        formMessage.style.color = 'var(--accent-color)';
        formMessage.innerText = 'Sending message...';
        
        setTimeout(() => {
            formMessage.style.color = '#38a169'; // Success color
            formMessage.innerText = 'Message Sent! We will get back to you soon.';
            contactForm.reset();
        }, 1500);
    });

    // 10. Footer Current Year
    document.getElementById('current-year').innerText = new Date().getFullYear();
});
