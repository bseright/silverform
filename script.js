let form = document.querySelector("form");

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let names = document.querySelectorAll(".name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let submitLink = document.querySelector(".submit-link");

names.forEach(item => {
    item.onkeydown = function(event) {
        return /[a-z]/i.test(event.key);
    }
});

phone.onkeyup = function() {
    if (phone.value.length === 3) {
        phone.value += "-";
    } else if (phone.value.length === 7) {
        phone.value += "-";
    }
}

submitLink.addEventListener("click", function() {

    form.submit();
});
