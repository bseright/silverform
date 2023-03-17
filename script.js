let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let allLabels = document.querySelectorAll("label");

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
let passwordLabel = document.querySelector("#password-label");

let confirmPassword = document.querySelector("#confirm-password");
let confirmLabel = document.querySelector("#confirm-label");

let submitHeader = document.querySelector(".submit-link h2");
let submitImage = document.querySelector(".submit-link img")
let submitLink = document.querySelector(".submit-link");

let totalErrors = 0;
let jiggleTimer;

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

password.addEventListener("focus", function() {
    if (passwordLabel.textContent === "Invalid Password" || passwordLabel.textContent === "Non-Matching Password") {
        passwordLabel.textContent = "Password";
        passwordLabel.style.fontStyle = "normal";
        passwordLabel.style.color = "white";
    }
})

confirmPassword.addEventListener("focus", function() {
    if (confirmLabel.textContent === "Invalid Password" || confirmLabel.textContent === "Non-Matching Password") {
        confirmLabel.textContent = "Confirm Password";
        confirmLabel.style.fontStyle = "normal";
        confirmLabel.style.color = "white";
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
        firstLabel.style.marginLeft = "-3px";
        firstLabel.style.paddingRight = "5px";
        firstLabel.textContent = "Invalid First Name";
        firstLabel.style.fontStyle = "italic";
        firstLabel.style.color = "rgb(255, 222, 0)";

        totalErrors++;
    }
}

function validateLast() {
    if (lastName.value === "") {
        lastLabel.style.marginLeft = "-3px";
        lastLabel.style.paddingRight = "5px";
        lastLabel.textContent = "Invalid Last Name";
        lastLabel.style.fontStyle = "italic";
        lastLabel.style.color = "rgb(255, 222, 0)";

        totalErrors++;
    }
}

function validateEmail() {
    if (email.checkValidity()) {
        if (emailStatus === "invalid") {
            emailLabel.style.marginLeft = "-3px";
            emailLabel.textContent = "Email";
            emailLabel.style.fontStyle = "normal";
            emailLabel.style.color = "white";
            emailStatus = "valid";
        }
    } else {
        emailLabel.style.marginLeft = "-3px";
        emailLabel.style.paddingRight = "5px";
        emailLabel.textContent = "Invalid Email";
        emailLabel.style.fontStyle = "italic";
        emailLabel.style.color = "rgb(255, 222, 0)";
        emailStatus = "invalid";
        email.value = "";

        totalErrors++;
    }
}

function validatePhone() {
    if (phone.checkValidity()) {
        if (phoneStatus === "invalid") {
            phoneLabel.style.marginLeft = "-3px";
            phoneLabel.textContent = "Phone";
            phoneLabel.style.fontStyle = "normal";
            phoneLabel.style.color = "white";
            phoneStatus = "valid";
        }
    } else {
        phoneLabel.style.marginLeft = "-3px";
        phoneLabel.textContent = "Invalid Phone";
        phoneLabel.style.fontStyle = "italic";
        phoneLabel.style.color = "rgb(255, 222, 0)";
        phoneStatus = "invalid";
        phone.value = "";

        totalErrors++;
    }
}

function validatePassword() {
    if (password.value === "" || confirmPassword.value === "") {
        passwordLabel.textContent = "Invalid Password";
        confirmLabel.textContent = "Invalid Password";

        totalErrors++;
    } else if (password.value === confirmPassword.value) {
        return;
    } else {
        passwordLabel.textContent = "Non-Matching Password";
        confirmLabel.textContent = "Non-Matching Password";

        totalErrors++;
    }

    passwordLabel.style.marginLeft = "-3px";
    passwordLabel.style.paddingRight = "10px";
    passwordLabel.style.fontStyle = "italic";
    passwordLabel.style.color = "rgb(255, 222, 0)";
    password.value = "";

    confirmLabel.style.marginLeft = "-3px";
    confirmLabel.style.paddingRight = "10px";
    confirmLabel.style.fontStyle = "italic";
    confirmLabel.style.color = "rgb(255, 222, 0)";
    confirmPassword.value = "";
}

function stopForm() {
    allInputs.forEach(item => {
        item.style.backgroundColor = "rgb(79, 137, 235)";
        item.style.border = "1px solid rgb(222, 234, 255)";
        item.style.color = "rgb(222, 234, 255)";
        item.style.pointerEvents = "none";
    });

    allLabels.forEach(item => {
        item.style.color = "rgb(222, 234, 255)";
    });

    submitHeader.textContent = "Submitted!";
    submitHeader.style.color = "white";
    submitLink.style.pointerEvents = "none";
    submitHeader.classList.add("bounce-in");
    submitImage.remove();
}

function checkErrors() {
    if (totalErrors > 0) {
        clearTimeout(jiggleTimer);

        submitLink.classList.add("jiggle");

        jiggleTimer = setTimeout(() => {
            submitLink.classList.remove("jiggle");
        }, "600")
    } else {
        clearTimeout(jiggleTimer);
        stopForm();
        // form.submit(); // form "submits" if no errors are found
    }
}


submitLink.addEventListener("click", function() {

    validateFirst();
    validateLast();
    validateEmail();
    validatePhone();
    validatePassword();

    checkErrors();

    totalErrors = 0;
});
