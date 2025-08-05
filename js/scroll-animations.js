/**
 * Scroll Animations using Intersection Observer API
 * Provides smooth animations for elements when they come into view
 */

class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            this.fallbackAnimation();
            return;
        }

        // Create intersection observer
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                        this.animateElement(entry.target);
                        this.animatedElements.add(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
            }
        );

        // Observe all elements with animation classes
        this.observeElements();
    }

    observeElements() {
        const selectors = [
            '.scroll-animate',
            '.scroll-slide-left', 
            '.scroll-slide-right',
            '.scroll-scale',
            '.scroll-fade'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                this.observer.observe(element);
            });
        });
    }

    animateElement(element) {
        // Add the animate-in class to trigger the animation
        element.classList.add('animate-in');
        
        // Optional: Add a callback for when animation completes
        setTimeout(() => {
            element.style.transition = 'none'; // Remove transition after animation
        }, 1200); // Match the CSS transition duration
    }

    // Fallback for browsers that don't support Intersection Observer
    fallbackAnimation() {
        const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-slide-left, .scroll-slide-right, .scroll-scale, .scroll-fade');
        
        animatedElements.forEach(element => {
            element.classList.add('animate-in');
        });
    }

    // Method to refresh animations (useful for dynamic content)
    refresh() {
        if (this.observer) {
            this.observer.disconnect();
            this.animatedElements.clear();
            this.observeElements();
        }
    }

    // Method to add animation to dynamically created elements
    addElement(element) {
        if (this.observer) {
            this.observer.observe(element);
        }
    }
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimations = new ScrollAnimations();
});

// Re-initialize after dynamic content loads (for single-page apps)
document.addEventListener('contentLoaded', () => {
    if (window.scrollAnimations) {
        window.scrollAnimations.refresh();
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollAnimations;
} 