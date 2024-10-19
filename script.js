document.getElementById("generateBtn").addEventListener("click", generatePassword);

// Character sets
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL_CHARACTERS = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecial = document.getElementById("special").checked;

    let characterPool = "";
    if (includeUppercase) characterPool += UPPERCASE;
    if (includeLowercase) characterPool += LOWERCASE;
    if (includeNumbers) characterPool += NUMBERS;
    if (includeSpecial) characterPool += SPECIAL_CHARACTERS;

    if (characterPool === "") {
        alert("Please select at least one character set!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById("passwordOutput").value = password;
    evaluateStrength(password);
}

// Password strength evaluation
function evaluateStrength(password) {
    const feedback = document.getElementById("strengthFeedback");
    let strength = 0;

    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;
    
    if (password.length >= 12) strength++;

    if (strength <= 2) {
        feedback.textContent = "Weak Password";
        feedback.style.color = "red";
    } else if (strength === 3) {
        feedback.textContent = "Moderate Password";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Strong Password";
        feedback.style.color = "green";
    }
}
