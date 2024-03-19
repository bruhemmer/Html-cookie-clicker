// game.js
const cookie = document.getElementById('cookie');
const cookieCounter = document.getElementById('cookie-counter');

let cookieTotal = 0;

// Event listener for clicking the cookie
cookie.addEventListener('click', () => {
    cookieTotal++;
    updateCookieCounter();
});

// Update the cookie counter display
function updateCookieCounter() {
    cookieCounter.innerHTML = `Cookies earned: ${cookieTotal}`;
}
