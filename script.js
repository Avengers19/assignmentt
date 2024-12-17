// Select the header animation container
const headerAnimation = document.getElementById("headerAnimation");

// Create floating particles
function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Randomize particle placement
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 3}s`;

    headerAnimation.appendChild(particle);

    // Remove particle after animation
    particle.addEventListener("animationend", () => {
        headerAnimation.removeChild(particle);
    });
}

// Generate particles at intervals
setInterval(createParticle, 300);

// Particle CSS in JS
const style = document.createElement("style");
style.innerHTML = `
    .particle {
        position: absolute;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        animation: float 5s infinite ease-in-out;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
