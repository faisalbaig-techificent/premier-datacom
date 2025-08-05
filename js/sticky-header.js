// Sticky Header Functionality
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    console.log('Sticky header script loaded');
    
    // Function to calculate and apply proper spacing
    function updateHeroSpacing() {
        if (header) {
            const headerHeight = header.offsetHeight;
            const heroSections = document.querySelectorAll('.hero-section');
            const firstContentElement = document.querySelector('body > *:not(#header):not(script)');
            
            console.log('Header height calculated:', headerHeight, 'px');
            console.log('Hero sections found:', heroSections.length);
            
            // Update hero sections
            heroSections.forEach((hero, index) => {
                hero.style.marginTop = headerHeight + 'px';
                console.log(`Updated hero section ${index + 1} spacing:`, headerHeight + 'px');
            });
            
            // If no hero section exists, add spacing to the first content element
            if (heroSections.length === 0 && firstContentElement) {
                firstContentElement.style.marginTop = headerHeight + 'px';
                console.log('Updated first content element spacing:', headerHeight + 'px');
            }
            
            // Also check for specific elements that might need spacing
            const bizFormWrapper = document.querySelector('.biz-form-wrapper');
            if (bizFormWrapper) {
                bizFormWrapper.style.marginTop = headerHeight + 'px';
                console.log('Updated biz-form-wrapper spacing:', headerHeight + 'px');
            }
            
            console.log('Spacing update completed');
        } else {
            console.log('Header element not found');
        }
    }
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Apply sticky functionality after header loads
    function applyStickyHeader() {
        if (header) {
            console.log('Applying sticky header functionality');
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.right = '0';
            header.style.zIndex = '1000';
            header.style.background = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.transition = 'all 0.3s ease';
            
            // Update hero spacing after applying sticky positioning
            setTimeout(updateHeroSpacing, 100);
        }
    }
    
    // Apply immediately
    applyStickyHeader();
    
    // Apply after delays to ensure dynamic content is loaded
    setTimeout(applyStickyHeader, 100);
    setTimeout(applyStickyHeader, 500);
    setTimeout(updateHeroSpacing, 1000);
    setTimeout(updateHeroSpacing, 2000);
    setTimeout(updateHeroSpacing, 3000);
    
    // Apply when header content changes (for dynamic loading)
    if (header) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    console.log('Header content changed, reapplying sticky header');
                    setTimeout(applyStickyHeader, 50);
                    setTimeout(updateHeroSpacing, 150);
                }
            });
        });
        
        observer.observe(header, {
            childList: true,
            subtree: true
        });
    }
    
    // Also listen for window load event
    window.addEventListener('load', function() {
        console.log('Window loaded, applying sticky header');
        setTimeout(applyStickyHeader, 100);
        setTimeout(updateHeroSpacing, 200);
        setTimeout(updateHeroSpacing, 1000);
    });
    
    // Update spacing on window resize
    window.addEventListener('resize', function() {
        console.log('Window resized, updating spacing');
        setTimeout(updateHeroSpacing, 100);
    });
    
    // Force update after a longer delay to ensure everything is loaded
    setTimeout(updateHeroSpacing, 3000);
    setTimeout(updateHeroSpacing, 5000);
    
    // ===== DRAWER MENU FUNCTIONALITY =====
    
    // Highlight active link
    function highlightActiveLink() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll(".nav-link, .drawer-nav-link");
        
        links.forEach((link) => {
            const linkPath = new URL(link.href, window.location.origin).pathname;
            if (linkPath === currentPath) {
                link.classList.add("active");
            }
        });
    }
    
    // Drawer functionality
    function initDrawer() {
        const drawerToggle = document.getElementById('drawerToggle');
        const drawerMenu = document.getElementById('drawerMenu');
        const drawerOverlay = document.getElementById('drawerOverlay');
        const drawerClose = document.getElementById('drawerClose');
        
        if (drawerToggle && drawerMenu && drawerOverlay) {
            function openDrawer() {
                drawerMenu.classList.add('open');
                drawerOverlay.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
            
            function closeDrawer() {
                drawerMenu.classList.remove('open');
                drawerOverlay.classList.remove('show');
                document.body.style.overflow = ''; // Restore scrolling
            }
            
            // Event listeners
            drawerToggle.addEventListener('click', openDrawer);
            drawerClose.addEventListener('click', closeDrawer);
            drawerOverlay.addEventListener('click', closeDrawer);
            
            // Close drawer when clicking on navigation links
            drawerMenu.querySelectorAll('.drawer-nav-link').forEach(link => {
                link.addEventListener('click', closeDrawer);
            });
            
            // Close drawer on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && drawerMenu.classList.contains('open')) {
                    closeDrawer();
                }
            });
            
            console.log('Drawer functionality initialized');
        }
    }
    
    // Initialize drawer and active link highlighting
    setTimeout(function() {
        highlightActiveLink();
        initDrawer();
    }, 100);
    
    // Re-initialize after header loads
    setTimeout(function() {
        highlightActiveLink();
        initDrawer();
    }, 1000);
}); 