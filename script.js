var job_title = document.getElementById("job-title");
const words = ["Front End Developer", "Back End Developer", "Full Stack Developer"]; // Array of words to display
let wordIndex = 0; // Track the current word
let charIndex = 0; // Track the character within the word

function typeWriter() {
    if (charIndex < words[wordIndex].length) {
        job_title.append(words[wordIndex].charAt(charIndex));
        charIndex++;
        setTimeout(typeWriter, 90); // Adjust typing speed
    } else {
        setTimeout(clearAndNext, 1000); // Pause before clearing
    }
}

function clearAndNext() {
    job_title.innerHTML = ""; // Clear the output
    charIndex = 0; // Reset character index for the new word
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word, looping back to the start
    typeWriter(); // Start typing the next word
}

typeWriter(); // Start the initial typing