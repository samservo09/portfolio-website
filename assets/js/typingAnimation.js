const textArray = [
    "Data Science",
    "Research",
    "Machine Learning",
    "Artificial Intelligence",
    "Bioinformatics",
    "Medicine"
];
let textIndex = 0;
let charIndex = 0;
const typingTextElement = document.getElementById("typing-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        setTimeout(deleteText, 2000); // Pause before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50); // Adjust deletion speed here
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Move to the next text
        setTimeout(type, 500); // Pause before typing next text
    }
}

// Start the typing effect when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    type();
});
