// Efek gulir lembut antar bagian
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Animasi partikel kecil (percikan sihir)
const body = document.body;
for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animationDuration = (2 + Math.random() * 3) + "s";
    body.appendChild(sparkle);
}

const style = document.createElement("style");
style.textContent = `
.sparkle {
    position: fixed;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle, #fff, transparent);
    border-radius: 50%;
    animation: sparkleMove infinite;
    opacity: 0;
}
@keyframes sparkleMove {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
}`;
document.head.appendChild(style);
