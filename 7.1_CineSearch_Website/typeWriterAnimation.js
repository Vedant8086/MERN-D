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
        
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        typeSpeed = 500; 
    }

    setTimeout(typeWriter, typeSpeed);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(typeWriter, 500));
} else {
    setTimeout(typeWriter, 500);
}
}