// Function for general section reveals (About, Projects, etc.)
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); // Run once on load

// Intersection Observer for the Expertise Circles
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('run-animation');
            // Optional: stop observing once the animation has run
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 }); // Triggers when 30% of the circle is visible

document.querySelectorAll('.skill-circle').forEach((circle) => {
    skillObserver.observe(circle);
});