
document.addEventListener("DOMContentLoaded", () => {

    const passwordInput = document.querySelector(".password-box input");
    const rangeInput = document.querySelector('input[type="range"]');
    const lengthDisplay = document.querySelector(".length-box span");
    const generateBtn = document.querySelector("button");

    const checkboxes = document.querySelectorAll('.options input');
    const upperCaseCheck = checkboxes[0];
    const lowerCaseCheck = checkboxes[1];
    const numberCheck = checkboxes[2];
    const symbolCheck = checkboxes[3];

    const copyIcon = document.querySelector(".copy-icon");

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // 🔹 Slider update
    rangeInput.addEventListener("input", () => {
        lengthDisplay.textContent = rangeInput.value;
    });

    // 🔹 Generate Password
    function generatePassword() {
        let length = parseInt(rangeInput.value);
        let chars = lowerChars;

        if (upperCaseCheck.checked) chars += upperChars;
        if (lowerCaseCheck.checked) chars += lowerChars;
        if (numberCheck.checked) chars += numberChars;
        if (symbolCheck.checked) chars += symbolChars;

        let password = "";

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        passwordInput.value = password;
    }

    // 🔹 Button click
    generateBtn.addEventListener("click", generatePassword);

    // 🔹 Copy
    copyIcon.addEventListener("click", () => {
        navigator.clipboard.writeText(passwordInput.value)
            .then(() => {
                copyIcon.textContent = "✔";
                setTimeout(() => {
                    copyIcon.textContent = "📋";
                }, 1500);
            });
    });

    // 🔹 Default password
    generatePassword();
});
