// Add fade-in effect when scrolling
document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        
        if (position < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
});
