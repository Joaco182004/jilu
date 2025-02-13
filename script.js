document.getElementById('animateButton').addEventListener('click', function() {
    const heart = document.getElementById('heart');
    heart.classList.toggle('sparkle');
    
    if (heart.classList.contains('sparkle')) {
        heart.style.animation = 'none'; // Stop the pulse animation
        setTimeout(() => {
            heart.style.animation = 'pulse 1.5s infinite'; // Restart the pulse animation
        }, 100);
    }
});
