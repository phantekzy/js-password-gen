// ==================== DOM SELECTION ====================
const passBox = document.getElementById('pass-input');
const genBtn = document.getElementById('gen-btn');
const copyBtn = document.getElementById('copy-btn');

// ==================== CONSTANTS ====================
const length = 12; // desired password length

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers   = "0123456789";
const symbols   = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

const allChars = upperCase + lowerCase + numbers + symbols;

// ==================== FUNCTIONS ====================

// Generate random password
function createPassword() {
  let password = "";

  // Ensure at least one of each type
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // Fill the rest of the password
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Display result
  passBox.value = password;
}

// Copy password to clipboard
function copyPassword() {
  passBox.select(); // select the text
  document.execCommand('copy'); // copy it
}

// ==================== EVENT LISTENERS ====================
genBtn.addEventListener('click', createPassword);
copyBtn.addEventListener('click', copyPassword);

