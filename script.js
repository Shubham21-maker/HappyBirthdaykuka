// Countdown Timer
const countdownElement = document.getElementById('countdown');
const birthday = new Date('2025-02-21T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        countdownElement.innerHTML = "Happy Birthday, Prachi!";
    }
}
setInterval(updateCountdown, 1000);

// Reasons Why I Love You
const reasons = [
    "You always brighten my day.",
    "Your smile is contagious.",
    "You believe in me when I doubt myself.",
    "You have a heart of gold.",
    "Every moment with you feels special."
    // Add more reasons here
];

const reasonsList = document.getElementById('reasonsList');
reasons.forEach((reason, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Reason ${index + 1}: ${reason}`;
    reasonsList.appendChild(listItem);
});

// Surprise Button
document.getElementById('surpriseBtn').addEventListener('click', () => {
    alert('You are my everything, Prachi! Happy Birthday in advance!');
});
