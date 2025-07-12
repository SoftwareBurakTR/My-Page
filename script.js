document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    const heroText = document.querySelector('.hero-section h3');
    const titles = ["Security Researcher", "Penetration Tester", "Full Stack Developer"];
    heroText.textContent = titles[0];
    let currentTitleIndex = 0;
    setInterval(() => {
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        const text = titles[currentTitleIndex];
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                    heroText.textContent += text.charAt(i);   
                i++;
            } else {
                clearInterval(typing);
            }
        }, 20);
        heroText.textContent = '';
        clearInterval();
    }, 3000);
});