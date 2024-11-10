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

const sections = document.querySelectorAll('.scroll-section');

function handleScroll() {
 
    const scrollPosition = window.scrollY;
    const navLinks = document.querySelectorAll(".nav-item a");
  
    document.querySelectorAll("section").forEach(section => {
      const sectionTop = section.offsetTop - 50; // Adjust offset as needed
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const currentId = section.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
        });
      }
    });
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2; // Adjust for earlier/later animation
        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // Run on page load in case elements are already in view
 