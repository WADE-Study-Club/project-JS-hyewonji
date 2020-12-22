const form = document.querySelector(".logIn__form");
const submit = form.querySelector(".logIn_btn");

function check() {
    const chkUserId = checkValidUsername(form),
        chkPassword = checkValidPassword(form);

    if (chkUserId && chkPassword) {
        submit.style.backgroundColor = "#02FF9B"
    } else {
        submit.style.backgroundColor = "#D3D3D3"
    }

    chkPassword;
}

function checkValidUsername() {
    const userId = form.userId.value;
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (userId == " ") {
        return false
    }

    if (exptext.test(userId) === false) {
        alert("Error: The Email Address Is Badly Formatted.");
        return false
    } else {
        console.log(userId);
        return true
    }
}

function checkValidPassword(form) {
    const password = form.password.value;

    if (password == " ") {
        return false
    }

    if (password.length < 6) {
        return false
    } else {
        console.log(password);
        return true
    }
}

function init() {
    form.password.addEventListener("change", check);
}

init()