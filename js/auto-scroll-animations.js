/**
 * Auto Scroll Animations
 * Automatically applies scroll animation classes to common elements
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Auto scroll animations initializing...');
    initializeAnimations();
});

// Function to initialize animations
function initializeAnimations() {
    // Auto-apply scroll animations to decorative images
    const decorativeImages = document.querySelectorAll('img[src*="top-right.png"], img[src*="bottom-left.png"]');
    console.log(`Found ${decorativeImages.length} decorative images`);
    
    decorativeImages.forEach((img, index) => {
        console.log(`Processing decorative image ${index + 1}:`, img.src);
        if (img.src.includes('top-right.png')) {
            img.classList.add('scroll-slide-right');
            img.setAttribute('data-delay', '400');
            console.log('Applied scroll-slide-right to top-right image');
        } else if (img.src.includes('bottom-left.png')) {
            img.classList.add('scroll-slide-left');
            img.setAttribute('data-delay', '600');
            console.log('Applied scroll-slide-left to bottom-left image');
        }
    });

    // Auto-apply animations to section titles
    const sectionTitles = document.querySelectorAll('h2.section-title, h2.fw-bold');
    sectionTitles.forEach((title, index) => {
        if (!title.classList.contains('scroll-animate')) {
            title.classList.add('scroll-animate');
            title.setAttribute('data-delay', '200');
        }
    });

    // Auto-apply animations to decorative lines
    const lines = document.querySelectorAll('.line, .halfline');
    lines.forEach((line, index) => {
        if (!line.classList.contains('scroll-animate')) {
            line.classList.add('scroll-animate');
            line.setAttribute('data-delay', (300 + (index * 100)).toString());
        }
    });

    // Auto-apply animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        if (!card.classList.contains('scroll-fade')) {
            card.classList.add('scroll-fade');
            card.setAttribute('data-delay', (200 + (index * 150)).toString());
        }
    });

    // Auto-apply animations to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        if (!card.classList.contains('scroll-scale')) {
            card.classList.add('scroll-scale');
            card.setAttribute('data-delay', (200 + (index * 150)).toString());
        }
    });

    // Auto-apply animations to hero sections
    const heroSections = document.querySelectorAll('.hero-section');
    heroSections.forEach(section => {
        if (!section.classList.contains('scroll-fade')) {
            section.classList.add('scroll-fade');
        }
    });

    // Auto-apply animations to about sections
    const aboutSections = document.querySelectorAll('.about-section');
    aboutSections.forEach(section => {
        if (!section.classList.contains('scroll-fade')) {
            section.classList.add('scroll-fade');
        }
    });

    // Auto-apply animations to testimonial sections
    const testimonialSections = document.querySelectorAll('.testimonial-section');
    testimonialSections.forEach(section => {
        if (!section.classList.contains('scroll-fade')) {
            section.classList.add('scroll-fade');
        }
    });

    // Auto-apply animations to partner sections
    const partnerSections = document.querySelectorAll('.partners-section');
    partnerSections.forEach(section => {
        if (!section.classList.contains('scroll-fade')) {
            section.classList.add('scroll-fade');
        }
    });

    // Refresh scroll animations after applying new classes
    if (window.scrollAnimations) {
        setTimeout(() => {
            console.log('Refreshing scroll animations...');
            window.scrollAnimations.refresh();
        }, 100);
    } else {
        console.log('Scroll animations not available yet, will retry...');
        setTimeout(() => {
            if (window.scrollAnimations) {
                window.scrollAnimations.refresh();
            }
        }, 500);
    }
    
    console.log('Auto scroll animations initialization complete');
}

// Function to refresh animations for dynamically loaded content
function refreshAnimationsForDynamicContent() {
    console.log('Refreshing animations for dynamic content...');
    initializeAnimations();
}

// Make the function globally available
window.refreshAnimationsForDynamicContent = refreshAnimationsForDynamicContent; 