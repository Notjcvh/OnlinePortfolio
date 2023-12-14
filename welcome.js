const dynamicText = document.querySelector("h1 span");
const words = ["a Game Designer", "a Teacher", "a Software Developer", "Isaac Hong"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let hasFinished = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if(!hasFinished){
        console.log(wordIndex);
        if (!isDeleting && charIndex < currentWord.length) {
            // If condition is true, type the next character
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            if (wordIndex == 3){
                hasFinished = true;
                document.getElementById("button").style.top = 60 + "%";
                return;
            }
            // If condition is true, remove the previous character
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            // If word is deleted then switch to the next word
            isDeleting = !isDeleting;
            dynamicText.classList.remove("stop-blinking");
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            setTimeout(typeEffect, 600);
        }
    }
}

typeEffect();