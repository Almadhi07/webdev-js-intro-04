"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const response1 = document.getElementById("response");
// create a mutable variable called age and do not assign it a value.

let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    if(isNaN(age)) {
        response1.textContent = "Please enter a valid number.";
    } else if (age < 18) {
        response1.textContent = "You are not old enough to proceed.";
    } else {
        response1.textContent = "Welcome! You are old enough to proceed.";
    }

}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
