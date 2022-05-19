let passwordBox = document.getElementById("pass");
let passwordConfirmationBox = document.getElementById("confirm_pass");
let lengthValidationText = document.getElementById("length");
let lowerCaseValidationText = document.getElementById("lower_case");
let upperCaseValidationText = document.getElementById("upper_case");
let numberValidationText = document.getElementById("number");
let specialCharValidationText = document.getElementById("special_character");
let passwordConfirmationValidationText = document.getElementById("confirmation");

const lowerCaseLetters = /[a-z]/;
const upperCaseLetters = /[A-Z]/;
const numbers = /[0-9]/;
const specialCharacters = /[? ! " £ $ % ^ & * ( )]/;

const lowerCaseValidationMassage = "Min 1 mała litera";
const upperCaseValidationMassage = "Min 1 wielka litera";
const numberValidationMassage = "Min 1 cyfra";
const specialCharacterValidationMassage = "Min 1 znak specjalny";
const minPasswordLength = 8;
const lengthValidationMassage = `Min ${minPasswordLength} znaków`;
const passwordConfirmationMassage = "Hasła różnią się od siebie"

function printPasswordValidationMassage(regex, documentField, massage) {
    if(!passwordBox.value.match(regex)){
        documentField.innerHTML = massage;
    } else {
        documentField.innerHTML = "";
    }
}

function checkPasswordLength(minimumLength, documentField, massage) {
    if(passwordBox.value.length < minimumLength) {
        documentField.innerHTML = massage;
    } else {
        documentField.innerHTML = "";
    }
}

function checkPasswordConfirmation(passwordField1, passwordField2, documentField, massage) {
    if (passwordField1.value !== passwordField2.value) {
        documentField.innerHTML = massage;
    } else {
        documentField.innerHTML = "";
    }
}

passwordConfirmationBox.onkeyup = function() {
    checkPasswordConfirmation(passwordBox, passwordConfirmationBox, passwordConfirmationValidationText, passwordConfirmationMassage);
}

passwordBox.onkeyup = function() {

    printPasswordValidationMassage(lowerCaseLetters, lowerCaseValidationText,lowerCaseValidationMassage);

    printPasswordValidationMassage(upperCaseLetters, upperCaseValidationText, upperCaseValidationMassage);

    printPasswordValidationMassage(numbers, numberValidationText, numberValidationMassage);

    printPasswordValidationMassage(specialCharacters, specialCharValidationText, specialCharacterValidationMassage);

    checkPasswordLength(minPasswordLength, lengthValidationText, lengthValidationMassage);

    checkPasswordConfirmation(passwordBox, passwordConfirmationBox, passwordConfirmationValidationText, passwordConfirmationMassage);
}

