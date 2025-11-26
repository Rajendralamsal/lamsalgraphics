<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lamsal Graphics | Creative Design Agency</title>
    <!-- Load Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Load Three.js via CDN for the particle animation -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    
    <style>
        /* Custom styles for the 3D canvas and font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        /* --- PRIMARY COLOR THEME: Indigo for Trust and Security --- */
        :root {
            --primary-color: #4f46e5; /* Indigo 600 */
            --secondary-color: #f3f4f6; /* Gray 100 */
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            color: #1f2937;
            scroll-behavior: smooth;
        }

        .hero-section {
            position: relative;
            height: 90vh; /* Increased height for better presence */
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: var(--secondary-color);
            border-bottom: 2px solid var(--primary-color);
        }

        #three-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            opacity: 0.6; /* Slightly increased opacity for visual impact */
        }

        .hero-content {
            position: relative;
            z-index: 20;
            text-align: center;
            padding: 3rem; /* More padding */
            background-color: rgba(255, 255, 255, 0.95); /* More solid background for readability (low cognitive load) */
            border-radius: 20px;
            max-width: 90%;
            box-shadow: 0 15px 40px rgba(79, 70, 229, 0.25); /* Stronger trust shadow */
        }

        /* Responsive Card Styling: Emphasizing the premium feel */
        .card {
            background-color: white;
            border: 1px solid #e5e7eb;
            transition: all 0.3s;
            box-shadow: 0 6px 15px -3px rgba(0, 0, 0, 0.05); /* Soft, consistent shadow */
            border-radius: 16px;
        }
        .card:hover {
            transform: translateY(-5px);
            /* Hover shadow adjusted for strong visual focus (Rule of Thirds guidance) */
            box-shadow: 0 12px 25px -5px rgba(79, 70, 229, 0.4), 0 6px 10px -3px rgba(79, 70, 229, 0.2);
        }

        /* Responsive button for mobile menu */
        #mobile-menu {
            display: none;
        }
    </style>
</head>
<body>

    <!-- Header & Navigation -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <a href="#" class="text-3xl font-extrabold text-gray-900 tracking-wider">
                LAMSAL<span class="text-indigo-600">GRAPHICS</span>
            </a>
            <div class="hidden md:flex space-x-10 font-medium text-lg">
                <a href="#services" class="text-gray-700 hover:text-indigo-600 transition">Services</a>
                <a href="#why-us" class="text-gray-700 hover:text-indigo-600 transition">Why Us</a>
                <a href="#portfolio" class="text-gray-700 hover:text-indigo-600 transition">Portfolio</a>
                <a href="#contact" class="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </div>
            <a href="#contact" class="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md transform hover:scale-[1.02]">
                Start a Project
            </a>
            <!-- Mobile Menu Button (Hamburger Icon) -->
            <button id="menu-toggle" class="md:hidden text-gray-700 hover:text-indigo-600 text-3xl p-1" aria-label="Toggle navigation menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
        </nav>
        
        <!-- Mobile Navigation Menu (Hidden by default) -->
        <div id="mobile-menu" class="md:hidden bg-white shadow-xl">
            <div class="flex flex-col space-y-3 p-4 text-center">
                <a href="#services" class="text-gray-700 hover:text-indigo-600 transition py-2 border-b">Services</a>
                <a href="#why-us" class="text-gray-700 hover:text-indigo-600 transition py-2 border-b">Why Us</a>
                <a href="#portfolio" class="text-gray-700 hover:text-indigo-600 transition py-2 border-b">Portfolio</a>
                <a href="#contact" class="text-indigo-600 hover:text-indigo-700 font-bold py-2">Contact Us</a>
            </div>
        </div>
    </header>

    <!-- Hero Section (Conversion-Focused & Confidence-Building) -->
    <section class="hero-section" id="home">
        <canvas id="three-canvas"></canvas>
        <div class="hero-content">
            <!-- Increased font size and contrast for the main message -->
            <h1 class="text-6xl sm:text-7xl md:text-8xl font-black text-gray-900 mb-6 leading-snug">
                DESIGN <span class="text-indigo-600">CONFIDENCE</span>.
            </h1>
            <!-- Clear, benefit-driven subtext (Low Cognitive Load) -->
            <p class="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-light">
                We craft powerful visual identities and strategic print solutions that establish **trust, security, and measurable business growth**.
            </p>
            <!-- Prominent CTA - Rule of Thirds focus point -->
            <a href="#contact" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-extrabold py-5 px-12 rounded-full transition duration-300 transform hover:scale-110 shadow-2xl shadow-indigo-600/70 uppercase tracking-wider">
                Secure Your Project &rarr;
            </a>
        </div>
    </section>

    <!-- Services Section (Clear Hierarchy) -->
    <section class="py-24 md:py-32 bg-white" id="services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2 block">Our Expertise</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Strategic Creative Solutions</h2>
            <p class="text-xl text-gray-600 mb-20 max-w-3xl mx-auto">We cover the entire visual spectrum—from tactile print to dynamic digital media.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

                <!-- Service 1: Brand & Print -->
                <div class="card p-8 text-left">
                    <div class="text-indigo-600 mb-4 text-5xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0 0 20c.98-1.55 1.48-3.66 1.14-5.91-.73-1.68-.46-3.87.5-5.91a8 8 0 0 0-.25-7.18z"></path><path d="M7.74 13.92a6 6 0 0 1 7.21-7.21"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Professional Brand Identity</h3>
                    <p class="text-gray-600">Establish authority with cohesive branding, logo design, and essential print collateral, including precise **Visiting Cards** and stationery.</p>
                </div>

                <!-- Service 2: Digital & Social -->
                <div class="card p-8 text-left">
                    <div class="text-indigo-600 mb-4 text-5xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="3" rx="2" ry="2"></rect><path d="M12 18v3"></path><path d="M8 21h8"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">High-Converting Digital Assets</h3>
                    <p class="text-gray-600">Drive engagement and sales with optimized UI/UX design, stunning website assets, and compelling **Social Media Graphics** that perform.</p>
                </div>

                <!-- Service 3: Custom Prints & Media -->
                <div class="card p-8 text-left">
                    <div class="text-indigo-600 mb-4 text-5xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-7l-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path><path d="M12 15h1"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3">Bespoke Custom Merchandise</h3>
                    <p class="text-gray-600">Extend your brand into the physical world with specialized **Custom Prints** (mugs, t-shirts), **Photography**, and expert packaging design.</p>
                </div>

            </div>
        </div>
    </section>

    <!-- Why Choose Us / Trust Section (New: Social Proof & Confidence) -->
    <section class="py-20 md:py-24 bg-indigo-50" id="why-us">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Unwavering Commitment to Quality</h2>
                <p class="text-xl text-gray-700 max-w-4xl mx-auto">Our process is built on precision, client-first communication, and guaranteed satisfaction—the foundation of true partnership.</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                
                <!-- Feature 1: Trust & Security -->
                <div class="p-6 bg-white rounded-xl shadow-md">
                    <div class="text-indigo-600 text-4xl mb-3 mx-auto">
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-1">Guaranteed Quality</h4>
                    <p class="text-gray-600 text-sm">Every project meets the highest standard of print and digital execution.</p>
                </div>
                
                <!-- Feature 2: Clarity & Simplicity -->
                <div class="p-6 bg-white rounded-xl shadow-md">
                    <div class="text-indigo-600 text-4xl mb-3 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-1">Transparent Pricing</h4>
                    <p class="text-gray-600 text-sm">No hidden fees. Clear pricing models for every service provided.</p>
                </div>
                
                <!-- Feature 3: Experience -->
                <div class="p-6 bg-white rounded-xl shadow-md">
                    <div class="text-indigo-600 text-4xl mb-3 mx-auto">
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><path d="M22 7H2"></path><path d="M12 17h.01"></path><path d="M17 17h.01"></path><path d="M7 17h.01"></path></svg>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-1">Local Expertise</h4>
                    <p class="text-gray-600 text-sm">Deep understanding of local markets and international design trends.</p>
                </div>

                <!-- Feature 4: Reliability -->
                <div class="p-6 bg-white rounded-xl shadow-md">
                    <div class="text-indigo-600 text-4xl mb-3 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-4 10-4 10 4 10 4M2 12l2-1M22 12l-2-1"></path><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path><path d="M6 10h.01"></path><path d="M18 14h.01"></path></svg>
                    </div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-1">Dedicated Support</h4>
                    <p class="text-gray-600 text-sm">Direct access to the designer for fast, reliable project communication.</p>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Founder Story / About Section (Moved down to support hierarchy) -->
    <section class="py-20 md:py-24 bg-white" id="founder-story">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap lg:flex-nowrap items-center gap-16">
                
                <!-- Photo (Left Column on Desktop - Adjusted order for better visual flow) -->
                <div class="w-full lg:w-1/2 flex justify-center p-4 order-2 lg:order-1">
                    <div class="w-full max-w-md h-96 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-[1.02] transition duration-500">
                        <img 
                            src="556880370_122211412400268629_7112908644594170367_n.jpg"
                            alt="Photo of Rajendra Lamsal, Founder of Lamsal Graphics" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <!-- Story Content (Right Column on Desktop) -->
                <div class="w-full lg:w-1/2 p-4 order-1 lg:order-2">
                    <span class="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2 block">Our Heritage</span>
                    <h2 class="text-4xl font-extrabold text-gray-900 mb-4">The Vision: Driven by Rajendra Lamsal</h2>
                    <h3 class="text-2xl font-semibold text-indigo-700 mb-6">Founded 2022 in Tilottama, Rupandehi.</h3>
                    
                    <p class="text-gray-700 text-lg mb-6">
                        Lamsal Graphics was built on the philosophy that **functional design drives business**. Since 2022, Rajendra Lamsal has championed a dedicated, quality-first approach, empowering local businesses with premium visual assets that guarantee impact.
                    </p>
                    <p class="text-gray-700 text-lg mb-6">
                        Our studio in **Tilottama-3, Magarghat** is where technical precision meets creative passion. We ensure every logo, print job, and digital graphic is a strategic investment for your brand, not just an expense.
                    </p>
                    <!-- Enhanced Quote for emotional appeal -->
                    <p class="text-indigo-700 font-extrabold text-xl italic border-l-4 border-indigo-600 pl-4 py-2 bg-indigo-50/50 rounded-r-lg">
                        "We don't just create designs; we build lasting visual assets that help our clients tell their unique story and achieve tangible business growth."
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Portfolio Section (Lead-in to Contact) -->
    <section class="py-24 md:py-32 bg-gray-50" id="portfolio">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2 block">Proof of Concept</span>
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Recent Work That Converts</h2>
            <p class="text-xl text-gray-600 mb-20 max-w-3xl mx-auto">Explore the breadth and quality of our execution across branding, digital media, and print.</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                <!-- Project 1 -->
                <div class="card bg-white overflow-hidden shadow-xl hover:shadow-indigo-600/50 transition duration-300">
                    <img src="https://placehold.co/800x600/f0f9ff/3730a3?text=Corporate+Stationery" alt="Corporate Stationery Design" class="w-full h-56 object-cover">
                    <div class="p-6 text-left">
                        <h4 class="text-2xl font-semibold text-gray-900">Elite Corporate Identity</h4>
                        <p class="text-indigo-600 font-medium mt-1">Logo, Letterhead, Visiting Cards</p>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="card bg-white overflow-hidden shadow-xl hover:shadow-indigo-600/50 transition duration-300">
                    <img src="https://placehold.co/800x600/f0f9ff/3730a3?text=Website+UI%2FUX" alt="Website UI/UX Design Project" class="w-full h-56 object-cover">
                    <div class="p-6 text-left">
                        <h4 class="text-2xl font-semibold text-gray-900">Responsive Web Interface</h4>
                        <p class="text-indigo-600 font-medium mt-1">UX Audit & UI Design</p>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="card bg-white overflow-hidden shadow-xl hover:shadow-indigo-600/50 transition duration-300">
                    <img src="https://placehold.co/800x600/f0f9ff/3730a3?text=Custom+T-Shirt+Design" alt="Custom T-Shirt Printing Project" class="w-full h-56 object-cover">
                    <div class="p-6 text-left">
                        <h4 class="text-2xl font-semibold text-gray-900">Custom Brand Merchandise</h4>
                        <p class="text-indigo-600 font-medium mt-1">Apparel & Promotional Prints</p>
                    </div>
                </div>

            </div>
            <a href="#contact" class="mt-20 inline-block bg-gray-200 hover:bg-gray-300 text-indigo-700 font-bold text-lg py-3 px-8 rounded-xl transition duration-300 shadow-md">
                Ready to See Your Work Here? Contact Us &rarr;
            </a>
        </div>
    </section>

    <!-- Contact Section (Low-Friction & Clear) -->
    <section class="py-24 md:py-32 bg-white" id="contact">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap lg:flex-nowrap gap-16 items-start">
                
                <!-- Contact Info (Left Side on Desktop) -->
                <div class="w-full lg:w-1/2 p-4 text-gray-900">
                    <span class="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-2 block">Partnership & Trust</span>
                    <h2 class="text-5xl font-extrabold mb-8 leading-snug">Let's Discuss Your Vision.</h2>
                    <p class="text-gray-700 text-xl mb-12">Reach out directly to the founder for a consultation. We guarantee discretion and a professional approach from the very first step.</p>

                    <ul class="space-y-8">
                        <li class="flex items-center space-x-4">
                            <div class="text-indigo-600 text-3xl flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2 2A18 18 0 0 1 3 4a2 2 0 0 1 2-2h3"></path><path d="M15 2L22 9L15 16"></path><path d="M22 2V9H15"></path></svg>
                            </div>
                            <div>
                                <p class="font-bold text-gray-900 text-lg">Direct Contact</p>
                                <p class="text-gray-600">
                                    +977 9867584455 / +977 9814483244
                                </p>
                            </div>
                        </li>
                        <li class="flex items-center space-x-4">
                            <div class="text-indigo-600 text-3xl flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </div>
                            <div>
                                <p class="font-bold text-gray-900 text-lg">Email Address</p>
                                <p class="text-gray-600">contact@lamsalgraphics.com</p>
                            </div>
                        </li>
                         <li class="flex items-center space-x-4">
                            <div class="text-indigo-600 text-3xl flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 4a2.5 2.5 0 0 0-2.45 1.55l-2.08 6.55a2 2 0 0 1-3.64 0l-2.08-6.55A2.5 2.5 0 0 0 5 4a2.5 2.5 0 0 0 0 5l7 14 7-14a2.5 2.5 0 0 0 0-5z"></path></svg>
                            </div>
                            <div>
                                <p class="font-bold text-gray-900 text-lg">Studio Location</p>
                                <p class="text-gray-600">Tilottama-3, Magarghat, Rupandehi, Nepal</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <!-- Contact Form (Right Side on Desktop - Low Friction) -->
                <div class="w-full lg:w-1/2 p-8 card shadow-2xl">
                    <h3 class="text-3xl font-bold text-gray-900 mb-6">Start Your Secure Inquiry</h3>
                    <form action="#" method="POST" onsubmit="handleFormSubmit(event)">
                        <div class="space-y-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 focus:ring-indigo-600 focus:border-indigo-600 transition">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 focus:ring-indigo-600 focus:border-indigo-600 transition">
                            </div>
                            <div>
                                <label for="project" class="block text-sm font-medium text-gray-700 mb-1">Project Summary / Budget Range</label>
                                <textarea id="project" name="project" rows="5" required class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 focus:ring-indigo-600 focus:border-indigo-600 transition"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-[1.01] shadow-xl shadow-indigo-600/50 uppercase tracking-wide">
                                Send Secure Brief
                            </button>
                            <div id="form-message" class="mt-4 text-center text-indigo-700 font-bold hidden p-3 bg-indigo-100 rounded-lg"></div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <div class="text-2xl font-extrabold text-white tracking-wider mb-4">
                LAMSAL<span class="text-indigo-500">GRAPHICS</span>
            </div>
            <p class="mb-4">&copy; 2025 Lamsal Graphics. All rights reserved. Strategic Design Partner.</p>
            <p class="text-sm">Driven by the principles of Visual Hierarchy and Conversion Psychology.</p>
        </div>
    </footer>

    <script>
        // --- JavaScript for Three.js Particle Visualization ---

        const canvas = document.getElementById('three-canvas');
        let scene, camera, renderer, particles, particleCount = 2000;
        let particlePositions, particleVelocities;

        /**
         * Initializes the Three.js scene, camera, and renderer.
         */
        function initThree() {
            // Check canvas dimensions
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;

            // Scene
            scene = new THREE.Scene();

            // Camera (Perspective Camera)
            const fov = 75;
            const aspect = width / height;
            const near = 0.1;
            const far = 1000;
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.z = 100;

            // Renderer
            renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                antialias: true,
                alpha: true
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);
            
            // --- Particles Setup ---
            const geometry = new THREE.BufferGeometry();
            particlePositions = new Float32Array(particleCount * 3);
            particleVelocities = [];
            // Particle color remains Indigo (0x4f46e5) for the trust theme
            const particleColor = new THREE.Color(0x4f46e5); 

            for (let i = 0; i < particleCount; i++) {
                // Position particles randomly in a large cube
                particlePositions[i * 3 + 0] = (Math.random() * 2000 - 1000); // x
                particlePositions[i * 3 + 1] = (Math.random() * 2000 - 1000); // y
                particlePositions[i * 3 + 2] = (Math.random() * 2000 - 1000); // z

                // Store random velocities for floating effect
                particleVelocities.push(
                    (Math.random() - 0.5) * 0.5,
                    (Math.random() - 0.5) * 0.5,
                    (Math.random() - 0.5) * 0.5
                );
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

            const material = new THREE.PointsMaterial({
                color: particleColor,
                size: 3, // Particle size
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.8
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            // Lighting is optional for PointsMaterial but harmless
            scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        }

        /**
         * The main animation loop. Updates particle positions.
         */
        function animate() {
            requestAnimationFrame(animate);

            const positions = particles.geometry.attributes.position.array;
            
            // Subtle floating and shifting movement
            for (let i = 0; i < particleCount; i++) {
                // Update position based on velocity
                positions[i * 3 + 0] += particleVelocities[i * 3 + 0];
                positions[i * 3 + 1] += particleVelocities[i * 3 + 1];
                positions[i * 3 + 2] += particleVelocities[i * 3 + 2];

                // Boundary wrapping: if a particle moves too far, reset its position on the opposite side
                if (positions[i * 3 + 0] > 1000) positions[i * 3 + 0] = -1000;
                if (positions[i * 3 + 0] < -1000) positions[i * 3 + 0] = 1000;
                if (positions[i * 3 + 1] > 1000) positions[i * 3 + 1] = -1000;
                if (positions[i * 3 + 1] < -1000) positions[i * 3 + 1] = 1000;
                if (positions[i * 3 + 2] > 1000) positions[i * 3 + 2] = -1000;
                if (positions[i * 3 + 2] < -1000) positions[i * 3 + 2] = 1000;
            }

            particles.geometry.attributes.position.needsUpdate = true;
            
            // Rotate the camera slightly for depth perception
            camera.rotation.y += 0.0001;
            camera.rotation.x += 0.00005;

            // Render the scene
            renderer.render(scene, camera);
        }

        /**
         * Handles window resizing to keep the canvas responsive.
         */
        function onWindowResize() {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            
            if (camera) {
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
            if (renderer) {
                renderer.setSize(width, height);
            }
        }

        /**
         * Handles form submission (simulated).
         */
        function handleFormSubmit(event) {
            event.preventDefault();
            const messageDiv = document.getElementById('form-message');
            messageDiv.textContent = 'Your secure brief has been sent! We will connect with you within one business day.';
            messageDiv.classList.remove('hidden');

            // Clear the form after a delay
            setTimeout(() => {
                event.target.reset();
                messageDiv.classList.add('hidden');
            }, 6000);
        }
        
        // --- Mobile Menu Toggle ---
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', () => {
                    mobileMenu.style.display = mobileMenu.style.display === 'flex' || mobileMenu.style.display === '' ? 'none' : 'flex';
                    mobileMenu.classList.toggle('flex');
                    mobileMenu.classList.toggle('hidden');
                });
                
                // Close menu when a link is clicked
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                         if (window.innerWidth < 768) { // Only close on mobile
                            mobileMenu.style.display = 'none';
                            mobileMenu.classList.add('hidden');
                            mobileMenu.classList.remove('flex');
                         }
                    });
                });
            }
        });


        // --- Execution ---

        window.onload = function() {
            // Check if Three.js is loaded
            if (typeof THREE === 'undefined') {
                console.error("Three.js not loaded. Cannot run 3D animation.");
                return;
            }
            
            // Set up canvas size and initialize Three.js
            const heroSection = document.getElementById('home');
            if (heroSection) {
                const resizeCanvas = () => {
                    const rect = heroSection.getBoundingClientRect();
                    canvas.style.width = rect.width + 'px';
                    canvas.style.height = rect.height + 'px';
                    // Initialize or update camera/renderer on resize
                    if (!renderer) {
                        initThree();
                        animate();
                    } else {
                        onWindowResize();
                    }
                };

                // Initial size setting
                resizeCanvas();
                
                // Use ResizeObserver for responsive canvas scaling
                const observer = new ResizeObserver(resizeCanvas);
                observer.observe(heroSection);
            }
            
            // Add global resize listener (mostly for camera aspect ratio)
            window.addEventListener('resize', onWindowResize);

            // Fallback if heroSection is somehow missed
            if (!renderer) {
                initThree();
                animate();
            }
        }
    </script>
</body>
</html>
