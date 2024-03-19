// game.js
const cookie = document.getElementById('cookie');
const cookieCounter = document.getElementById('cookie-counter');
const buyUpgradeButton = document.getElementById('buy-upgrade');
const buyAutoClickerButton = document.getElementById('buy-auto-clicker');

let cookieTotal = 0;
let cookiesPerClick = 1;
let autoClickers = 0;

// Event listener for clicking the cookie
cookie.addEventListener('click', () => {
    cookieTotal += cookiesPerClick;
    updateCookieCounter();
});

// Event listener for buying an upgrade
buyUpgradeButton.addEventListener('click', () => {
    if (cookieTotal >= 10) {
        cookieTotal -= 10;
        cookiesPerClick += 1;
        updateCookieCounter();
    }
});

// Event listener for buying an auto-clicker
buyAutoClickerButton.addEventListener('click', () => {
    if (cookieTotal >= 50) {
        cookieTotal -= 50;
        autoClickers += 1;
        setInterval(autoClick, 1000); // Auto-click every second
        updateCookieCounter();
    }
});

// Auto-click function
function autoClick() {
