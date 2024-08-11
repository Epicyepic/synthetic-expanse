window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const aboutGame = document.getElementById('about-game');
    const largeImage = document.querySelector('.large-image'); // Select the second large-image section
    const news = document.querySelector('.news');
    const aboutButton = document.getElementById('about-button');
    const mainButton = document.getElementById('main-button');
    const newsButton = document.getElementById('news-button');

    const heroHeight = hero.offsetHeight;
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Adjust the threshold to determine when to apply the 'active' class for 'About the Game'
    const threshold = heroHeight / 2;

    // Apply the 'active' class to the 'About the Game' section and hide the hero section
    if (scrollPosition > threshold) {
        aboutGame.classList.add('active');
        hero.classList.add('hidden');
    } else {
        aboutGame.classList.remove('active');
        hero.classList.remove('hidden');
    }

    // Handle disappearing transition for 'About the Game' section
    const aboutGameRect = aboutGame.getBoundingClientRect();
    const newsRect = news.getBoundingClientRect();

    // Calculate the distance between the bottom of 'About the Game' and the top of 'Latest News'
    const distanceToNews = newsRect.top - (aboutGameRect.bottom + window.scrollY);

    // Apply the disappearing class when 'About the Game' section is near 'Latest News'
    if (distanceToNews * 10 < viewportHeight) {
        aboutGame.classList.add('disappearing');
    } else {
        aboutGame.classList.remove('disappearing');
    }

    // Update sticky buttons based on scroll position
    if (scrollPosition * 1.6 < aboutGame.offsetTop) {
        aboutButton.style.display = 'block';
        mainButton.style.display = 'none';
        newsButton.style.display = 'none';
    } else if (scrollPosition + viewportHeight / 2 <= news.offsetTop) {
        aboutButton.style.display = 'none';
        mainButton.style.display = 'block';
        newsButton.style.display = 'none';
    } else if (scrollPosition + viewportHeight >= news.offsetTop) {
        aboutButton.style.display = 'none';
        mainButton.style.display = 'none';
        newsButton.style.display = 'block';
    } else {
        aboutButton.style.display = 'none';
        mainButton.style.display = 'none';
        newsButton.style.display = 'none';
    }
});

document.getElementById('about-button').addEventListener('click', () => {
    document.getElementById('about-game').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('main-button').addEventListener('click', () => {
    document.querySelector('.large-image').scrollIntoView({ behavior: 'smooth' }); // Scroll to the second large-image section
});

document.getElementById('news-button').addEventListener('click', () => {
    document.querySelector('.news').scrollIntoView({ behavior: 'smooth' });
});
