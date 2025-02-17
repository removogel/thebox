document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "black";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.8)";
        }
    });
});
