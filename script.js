let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    
    const guess = parseInt(guessInput.value, 10);
    attempts++;
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Please enter a number between 1 and 100.";
    } else if (guess < numberToGuess) {
        feedback.textContent = "Too low. Try again!";
    } else if (guess > numberToGuess) {
        feedback.textContent = "Too high. Try again!";
    } else {
        feedback.textContent = `Congratulations! You've guessed the number ${numberToGuess} in ${attempts} attempts.`;
        attemptsDisplay.textContent = '';
        // Reset the game
        numberToGuess = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
    }
    
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
}
