let form = document.querySelector("form");

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");

let email = document.querySelector("#email");
let emailLabel = document.querySelector("#email-label");
let emailStatus;

let phone = document.querySelector("#phone");
let phoneLabel = document.querySelector("#phone-label");
let phoneStatus;

let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");

let submitLink = document.querySelector(".submit-link");

phone.onkeypress = function(event) {
    if (event.keyCode === 8) {
        return;
    } else if (phone.value.length === 3) {
        phone.value += "-";
    } else if (phone.value.length === 7) {
        phone.value += "-";
    }
}

function validateEmail() {
    if (email.checkValidity()) {
        if (emailStatus === "invalid") {
            emailLabel.style.marginLeft = "0px";
            emailStatus = "valid";
            emailLabel.textContent = "Email";
            email.style.borderColor = "";
        }
    } else {
        emailLabel.style.marginLeft = "-5px";
        emailStatus = "invalid";
        emailLabel.textContent = "Invalid Email";
        email.style.borderColor = "rgb(245, 132, 132)";
    }
}

function validatePhone() {
    if (phone.checkValidity()) {
        if (phoneStatus === "invalid") {
            phoneLabel.style.marginLeft = "0px";
            phoneStatus = "valid";
            phoneLabel.textContent = "Phone";
            phone.style.borderColor = "";
        }
    } else {
        phoneLabel.style.marginLeft = "-5px";
        phoneStatus = "invalid";
        phoneLabel.textContent = "Invalid Phone";
        phone.style.borderColor = "rgb(245, 132, 132)";
    }
}


submitLink.addEventListener("click", function() {

    validateEmail();
    validatePhone();

    // form.submit();
});
