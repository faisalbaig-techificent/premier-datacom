/**
 * Debug Footer Images
 * Helps identify and fix footer image issues
 */

function debugFooterImages() {
    console.log('=== Footer Debug Information ===');
    
    // Check if footer exists
    const footer = document.getElementById('footer');
    if (!footer) {
        console.error('❌ Footer element not found!');
        return;
    }
    console.log('✅ Footer element found');
    
    // Check for decorative images
    const topRightImages = footer.querySelectorAll('img[src*="top-right.png"]');
    const bottomLeftImages = footer.querySelectorAll('img[src*="bottom-left.png"]');
    
    console.log(`Found ${topRightImages.length} top-right images`);
    console.log(`Found ${bottomLeftImages.length} bottom-left images`);
    
    // Check each image
    [...topRightImages, ...bottomLeftImages].forEach((img, index) => {
        console.log(`Image ${index + 1}:`, {
            src: img.src,
            classes: img.className,
            visible: img.offsetWidth > 0 && img.offsetHeight > 0,
            display: window.getComputedStyle(img).display,
            position: window.getComputedStyle(img).position,
            zIndex: window.getComputedStyle(img).zIndex
        });
    });
    
    // Check if scroll animations are applied
    const animatedImages = footer.querySelectorAll('.scroll-slide-right, .scroll-slide-left');
    console.log(`Found ${animatedImages.length} images with scroll animations`);
    
    // Check if scroll animations system is available
    if (window.scrollAnimations) {
        console.log('✅ Scroll animations system is available');
    } else {
        console.log('❌ Scroll animations system not available');
    }
    
    // Check if auto-refresh function is available
    if (window.refreshAnimationsForDynamicContent) {
        console.log('✅ Auto-refresh function is available');
    } else {
        console.log('❌ Auto-refresh function not available');
    }
    
    console.log('=== End Footer Debug ===');
}

// Run debug on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(debugFooterImages, 1000); // Wait for footer to load
});

// Make debug function globally available
window.debugFooterImages = debugFooterImages; 