// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
var lowercaseCheck;

// Determine the length of the password
function determineLength() {
    passwordLength = prompt("How many characters would you password to contain? (MUST BE from 8 to 128 characters) ");
    if (passwordLength < 8 && passwordLength !== null) {
        console.log(passwordLength);
        alert("Password length MUST BE a number between 8-128 characters!");
        determineLength();
    } else if (passwordLength > 128) {
        alert("Password length MUST BE a number between 8-128 characters!");
        determineLength();
    } else if (isNaN(passwordLength)) {
        alert("Password length MUST BE a number between 8-128 characters");
        determineLength();
    } else {
        return passwordLength;
    }
    console.log(passwordLength);
    return passwordLength;
}

function determineUppercase() {
    uppercaseCheck = confirm("Click OK to confirm including uppercase characters in your password.");
    if (uppercaseCheck === true) {
    }
    return uppercaseCheck;
}

function determineLowercase() {
    lowercaseCheck = confirm("Click OK to confirm including lowercase characters in your password.");
    if (lowercaseCheck === true) {
    }
    return lowercaseCheck;
}

function determineNumbers() {
    numberCheck = confirm("Click OK to confirm including numeric characters in your password.");
    if (numberCheck === true) {
    }
    return numberCheck;
}

function determineSpecial() {
    specialCheck = confirm("Click OK to confirm including special characters in your password.");
    if (specialCheck === true) {
    }
    return specialCheck;
}

function generatePassword() {
    determineLength();
    if (passwordLength === null) {
        return;
    }
    else {
        console.log(passwordLength);
        determineUppercase();
        console.log(uppercaseCheck);
        determineLowercase();
        console.log(lowercaseCheck);
        determineNumbers();
        console.log(numberCheck);
        determineSpecial();
        console.log(specialCheck);

        var characters = "";
        var password = "";
        if (uppercaseCheck && numberCheck && specialCheck) {
            characters += upperCaseCharacters + numbersCharacters + specialCharacters;

        } else if (uppercaseCheck && numberCheck) {
            characters += upperCaseCharacters + numbersCharacters;

        } else if (numberCheck && specialCheck) {
            characters += numbersCharacters + specialCharacters;

        } else if (uppercaseCheck && specialCheck) {
            characters += upperCaseCharacters + specialCharacters;

        } else if (uppercaseCheck) {
            characters += upperCaseCharacters;

        } else if (numberCheck) {
            characters += numbersCharacters;

        } else if (specialCheck) {
            characters += specialCharacters;

        } else {

        }

        for (var i = 0; i < passwordLength; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    }
}

// Write password to the #password input
function writePassword() {
    var password1 = "";
    password1 = generatePassword();

    var passwordText = document.querySelector("#password");
    passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);