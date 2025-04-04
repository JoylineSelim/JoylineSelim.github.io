document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.querySelector(".hero-image img");
    
    profileImage.addEventListener("mouseover", () => {
        profileImage.style.animation = "wobble 1s ease-in-out infinite alternate";
    });
    
    profileImage.addEventListener("mouseout", () => {
        profileImage.style.animation = "none";
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'documents/SELIM.docx';
    link.download = 'SELIM.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }