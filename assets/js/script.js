let form = document.querySelector("form");
let inputEmail = document.querySelector(".input-email");
let warning = document.querySelector(".warning");

form.addEventListener("submit", (ev)=> {
    ev.preventDefault();
    if (!checkEmail(inputEmail.value)) {
        inputEmail.classList.add("error-email");
        clearErrorMessage();
        createErrorMessage();
    } else {
        form.submit();
    };
});

function checkEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function createErrorMessage() {
    let span = document.createElement("span");
    span.classList.add("error-message");
    span.innerHTML = "Oops! Please check your email";
    form.parentNode.insertBefore(span, warning);
}

function clearErrorMessage() {
    let errorMessage = document.querySelectorAll(".error-message");
    for (let i=0; i<errorMessage.length; i++) {
        errorMessage[i].remove();
    }
}