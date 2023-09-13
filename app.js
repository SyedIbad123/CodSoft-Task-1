
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    
    // Set initial state to transparent
    let isNavbarTransparent = true;
    
    // Function to toggle the navbar background
    function toggleNavbarBackground() {
        if (window.scrollY > 0) {
            // When scrolling down
            if (isNavbarTransparent) {
                navbar.style.backgroundColor = "rgb(34,35,35)"; // Change to your desired background color
                isNavbarTransparent = false;
            }
        } else {
            // When at the top of the page
            if (!isNavbarTransparent) {
                navbar.style.backgroundColor = "transparent";
                isNavbarTransparent = true;
            }
        }
    }
    
    // Listen to scroll events
    window.addEventListener("scroll", toggleNavbarBackground);
});


document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    
    // Function to hide the navbar with a fade-up animation
    function hideNavbar() {
        if (window.scrollY > (2.25 * window.innerHeight)) {
            navbar.style.opacity = "0";
        } else {
            navbar.style.opacity = "1";
        }
    }
    
    // Listen to scroll events
    window.addEventListener("scroll", hideNavbar);
});

