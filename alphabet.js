// script.js

// Define the alphabet array
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Reference to the alphabet grid container
const alphabetGrid = document.querySelector('.alphabet-grid');

// Reference to the display area
const displayArea = document.getElementById('display-area');

// Object to hold preloaded sounds
const sounds = {};

// Function to preload audio files
function preloadSounds() {
    alphabet.forEach(letter => {
        const audio = new Audio(`sounds/${letter}.mp3`); // Adjust the path as necessary
        sounds[letter] = audio; // Store the audio in the sounds object
    });
}

// Function to generate the alphabet grid
function generateAlphabetGrid() {
    alphabet.forEach(letter => {
        const letterBox = document.createElement('div');
        letterBox.classList.add('letter-box');
        letterBox.textContent = letter;
        letterBox.dataset.letter = letter;
        alphabetGrid.appendChild(letterBox);
    });
}

// Function to handle letter click
function handleLetterClick(event) {
    if (event.target.classList.contains('letter-box')) {
        const letter = event.target.dataset.letter;
        displayArea.textContent = `You clicked on: ${letter}`;
        playSound(letter); // Play sound immediately
        speakLetter(letter); // Speak the letter
    }
}

// Function to play sound
function playSound(letter) {
    if (sounds[letter]) {
        sounds[letter].currentTime = 0; // Reset the audio to start
        sounds[letter].play().catch(error => {
            console.error('Error playing sound:', error);
        });
    }
}

// Function to speak the corresponding letter using Web Speech API
function speakLetter(letter) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(letter);
        // Optional: Set properties like language, pitch, rate, etc.
        utterance.lang = 'en-US';
        utterance.pitch = 1;
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support speech synthesis.');
    }
}

// Preload sounds on page load
preloadSounds();

// Initialize the grid
generateAlphabetGrid();

// Add event listener for clicks
alphabetGrid.addEventListener('click', handleLetterClick);

// Add event listener for the back button
document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'home.html'; // Change 'home.html' to your actual home page URL
});
