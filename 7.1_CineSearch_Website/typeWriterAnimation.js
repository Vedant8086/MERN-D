// Typewriter Animation Logic
export default function typeWriterAnimation() { 
const words = ["Movie", "Anime", "Series", "Show"];
const typewriterElement = document.getElementById('typewriter');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!typewriterElement) return;

    const currentWord = words[wordIndex];
    if (isDeleting) {
        // Remove a character
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add a character
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Determine typing speed (make deleting faster than typing)
    let typeSpeed = isDeleting ? 100 : 200;

    // If word is complete
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        // Loop back to start of words array
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        typeSpeed = 500; // Pause before typing new word
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start animation safely whether page is loaded or not
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(typeWriter, 500));
} else {
    setTimeout(typeWriter, 500);
}
}