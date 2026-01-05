document.addEventListener('DOMContentLoaded', () => {
    // Container
    const container = document.getElementById('particles-bg');
    // Colors
    const colors = ['#7B61FF', '#FF4D80', '#4ECDC4', '#FFD166'];

    // Particles
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 45 + 5;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        container.appendChild(p);
        animateParticle(p);
    }

    // Animate Particle
    function animateParticle(el) {
        const duration = 4000 + Math.random() * 5000;
        const x = (Math.random() - 0.5) * 120;
        const y = (Math.random() - 0.5) * 120;
        el.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${x}px, ${y}px)` },
            { transform: 'translate(0, 0)' }
        ], { duration, iterations: Infinity, easing: 'ease-in-out' });
    }

    // Progress Bar
    window.onscroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    };
});