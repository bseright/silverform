let form = document.querySelector("form");

let firstName = document.querySelector("#first-name");
let firstLabel = document.querySelector("#first-label");

let lastName = document.querySelector("#last-name");
let lastLabel = document.querySelector("#last-label");

let email = document.querySelector("#email");
let emailLabel = document.querySelector("#email-label");
let emailStatus;

let phone = document.querySelector("#phone");
let phoneLabel = document.querySelector("#phone-label");
let phoneStatus;

let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

let submitLink = document.querySelector(".submit-link");

firstName.addEventListener("focus", function() {
    if (firstLabel.textContent === "Invalid First Name") {
        firstLabel.textContent = "First Name";
        firstLabel.style.fontStyle = "normal";
        firstLabel.style.color = "white";
    }
})

lastName.addEventListener("focus", function() {
    if (lastLabel.textContent === "Invalid Last Name") {
        lastLabel.textContent = "Last Name";
        lastLabel.style.fontStyle = "normal";
        lastLabel.style.color = "white";
    }
})

email.addEventListener("focus", function() {
    if (emailLabel.textContent === "Invalid Email") {
        emailLabel.textContent = "Email";
        emailLabel.style.fontStyle = "normal";
        emailLabel.style.color = "white";
    }
})

phone.addEventListener("focus", function() {
    if (phoneLabel.textContent === "Invalid Phone") {
        phoneLabel.textContent = "Phone";
        phoneLabel.style.fontStyle = "normal";
        phoneLabel.style.color = "white";
    }
})

phone.onkeypress = function(event) {
    if (event.keyCode === 8) {
        return;
    } else if (phone.value.length === 3) {
        phone.value += "-";
    } else if (phone.value.length === 7) {
        phone.value += "-";
    }
}

function validateFirst() {
    if (firstName.value === "") {
        firstLabel.style.marginLeft = "-5px";
        firstLabel.style.paddingRight = "5px";
        firstLabel.textContent = "Invalid First Name";
        firstLabel.style.fontStyle = "italic";
        firstLabel.style.color = "rgb(255, 222, 0)";
    }
}

function validateLast() {
    if (lastName.value === "") {
        lastLabel.style.marginLeft = "-5px";
        lastLabel.style.paddingRight = "5px";
        lastLabel.textContent = "Invalid Last Name";
        lastLabel.style.fontStyle = "italic";
        lastLabel.style.color = "rgb(255, 222, 0)";
    }
}

function validateEmail() {
    if (email.checkValidity()) {
        if (emailStatus === "invalid") {
            emailLabel.style.marginLeft = "0px";
            emailLabel.textContent = "Email";
            emailLabel.style.fontStyle = "normal";
            emailLabel.style.color = "white";
            emailStatus = "valid";
        }
    } else {
        emailLabel.style.marginLeft = "-5px";
        emailLabel.style.paddingRight = "5px";
        emailLabel.textContent = "Invalid Email";
        emailLabel.style.fontStyle = "italic";
        emailLabel.style.color = "rgb(255, 222, 0)";
        emailStatus = "invalid";
        email.value = "";
    }
}

function validatePhone() {
    if (phone.checkValidity()) {
        if (phoneStatus === "invalid") {
            phoneLabel.style.marginLeft = "0px";
            phoneLabel.textContent = "Phone";
            phoneLabel.style.fontStyle = "normal";
            phoneLabel.style.color = "white";
            phoneStatus = "valid";
        }
    } else {
        phoneLabel.style.marginLeft = "-5px";
        phoneLabel.textContent = "Invalid Phone";
        phoneLabel.style.fontStyle = "italic";
        phoneLabel.style.color = "rgb(255, 222, 0)";
        phoneStatus = "invalid";
        phone.value = "";
    }
}


submitLink.addEventListener("click", function() {

    validateFirst();
    validateLast();
    validateEmail();
    validatePhone();

    // form.submit();
});
