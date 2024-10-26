let randomNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 5; // Setează limita de încercări
let attemptsLeft = maxAttempts; // Încercări rămase

const message = document.getElementById("message");
const attemptsMessage = document.getElementById("attempts");
const checkButton = document.getElementById("checkButton");
const restartButton = document.getElementById("restartButton");

function updateAttemptsMessage() {
    attemptsMessage.textContent = `Încercări rămase: ${attemptsLeft}`;
}

// Afișează mesajul inițial pentru încercări
updateAttemptsMessage();

checkButton.addEventListener("click", function () {
    const userGuess = Number(document.getElementById("guessInput").value);

    // Verificăm dacă utilizatorul a folosit toate încercările
    if (attemptsLeft > 0) {
        if (userGuess === randomNumber) {
            message.textContent = "Felicitări! Ai ghicit numărul!";
            message.className = "success";
            endGame();
        } else {
            attemptsLeft--;
            updateAttemptsMessage();

            if (attemptsLeft === 0) {
                message.textContent = `Ai pierdut! Numărul era ${randomNumber}.`;
                message.className = "error";
                endGame();
            } else {
                message.textContent = userGuess > randomNumber ? "Numărul e prea mare! Încearcă din nou!" : "Numărul e prea mic! Încearcă din nou!";
                message.className = "error";
            }
        }
    }
});

function endGame() {
    checkButton.disabled = true; // Dezactivează butonul de verificare
    restartButton.style.display = "inline"; // Afișează butonul de restart
}

// Funcția de restart
restartButton.addEventListener("click", function () {
    resetGame(); // Apelăm funcția de resetare
});

// Funcția de resetare a jocului
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generează un nou număr aleatoriu
    attemptsLeft = maxAttempts; // Resetează numărul de încercări
    message.textContent = "";
    message.className = "";
    document.getElementById("guessInput").value = "";
    checkButton.disabled = false; // Reactivează butonul de verificare
    restartButton.style.display = "none"; // Ascunde butonul de restart
    updateAttemptsMessage(); // Resetează mesajul cu încercări
}
