(function() {
  const init = () => {
    // Initialize mobile navigation functionality
    const mobileMenuButtons = document.querySelectorAll('[x-on\\:click="mobileNavOpen = !mobileNavOpen"]');
    const mobileNavs = document.querySelectorAll('[\\:class]');
    
    let mobileNavOpen = false;
    
    mobileMenuButtons.forEach(button => {
      button.addEventListener('click', () => {
        mobileNavOpen = !mobileNavOpen;
        
        mobileNavs.forEach(nav => {
          if (mobileNavOpen) {
            nav.classList.remove('hidden');
            nav.classList.add('block');
          } else {
            nav.classList.add('hidden');
            nav.classList.remove('block');
          }
        });
      });
    });
    
    // Close mobile nav when clicking overlay
    const overlays = document.querySelectorAll('[x-on\\:click="mobileNavOpen = !mobileNavOpen"]');
    overlays.forEach(overlay => {
      if (overlay.classList.contains('fixed') && overlay.classList.contains('inset-0')) {
        overlay.addEventListener('click', () => {
          mobileNavOpen = false;
          mobileNavs.forEach(nav => {
            nav.classList.add('hidden');
            nav.classList.remove('block');
          });
        });
      }
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#' || href === '') {
          e.preventDefault();
        }
      });
    });
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();