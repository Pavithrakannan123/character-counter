const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxChars = 200;

textarea.addEventListener("input", function () {

    if (textarea.value.length > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
    }

    let currentLength = textarea.value.length;
    let remaining = maxChars - currentLength;

    counter.textContent =
        currentLength + "/" + maxChars + " characters";

    if (currentLength === maxChars) {
        warning.textContent =
            "Character limit reached! You cannot type more than 200 characters.";
    } else {
        warning.textContent = "";
    }
});