// script.js

// Select all grid items
const gridItems = document.querySelectorAll('.grid-item');

// Function to display a playful message, handle click, and play a sound
function onGridItemClick(item) {
    const sectionName = item.textContent.trim(); // Get section name
    
    // Play a fun sound (make sure you have the sound file)
    const sound = new Audio('click-sound.mp3');
    sound.play();

    // Create playful messages
    const messages = [
        `Hooray! Let's learn about ${sectionName}!`,
        `Wow! ${sectionName} is fun!`,
        `Yay! You're a superstar at ${sectionName}!`,
        `Let's explore ${sectionName} together!`
    ];

    // Pick a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Show the message with a playful popup
    const messageContainer = document.createElement('div');
    messageContainer.textContent = randomMessage;
    messageContainer.classList.add('message-popup', 'fade-in');
    document.body.appendChild(messageContainer);

    // Add fade-out animation to the message after a short delay
    setTimeout(() => {
        messageContainer.classList.remove('fade-in');
        messageContainer.classList.add('fade-out');
        setTimeout(() => messageContainer.remove(), 1000); // Remove the message after fade-out
    }, 2000);
}

// Add click event to all grid items with bounce animation
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('bounce'); // Add bounce animation on click
        setTimeout(() => {
            item.classList.remove('bounce');
            onGridItemClick(item);
        }, 300); // Delay to let the bounce animation play
    });
});
