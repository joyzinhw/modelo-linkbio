let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slideIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
}

// Initialize the first slide
showSlide(slideIndex);


document.addEventListener('DOMContentLoaded', function() {
    let facebookClicks = 0;
    let instagramClicks = 0;
    let twitterClicks = 0;
    let mapsClicks = 0;

    const facebookLink = document.getElementById('facebook-link');
    const instagramLink = document.getElementById('instagram-link');
    const twitterLink = document.getElementById('twitter-link');
    const mapsLink = document.getElementById('maps-link');
    const googleMap = document.getElementById('google-map');

    facebookLink.addEventListener('click', function() {
        facebookClicks++;
        console.log(`Facebook link clicked ${facebookClicks} times`);
    });

    instagramLink.addEventListener('click', function() {
        instagramClicks++;
        console.log(`Instagram link clicked ${instagramClicks} times`);
    });

    twitterLink.addEventListener('click', function() {
        twitterClicks++;
        console.log(`Twitter link clicked ${twitterClicks} times`);
    });

    mapsLink.addEventListener('click', function() {
        mapsClicks++;
        console.log(`Google Maps link clicked ${mapsClicks} times`);
    });

    googleMap.addEventListener('click', function() {
        mapsClicks++;
        console.log(`Google Map clicked ${mapsClicks} times`);
    });
});
