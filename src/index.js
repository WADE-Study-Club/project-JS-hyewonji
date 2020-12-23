const form = document.querySelector(".logIn__form");
const submit = form.querySelector(".logIn_btn");
const users_LS = "users";
let users = [];

function checkUsers() {
    const loadUsers = localStorage.getItem(users_LS);
    const userId = form.userId.value;
    const password = form.password.value;
    if (loadUsers !== null) {
        const parsedUsers = JSON.parse(loadUsers);
        parsedUsers.forEach(function (user) {
            if (user.id === userId && user.password === password) {
                console.log("welcome")
            } else {
                console.log("try again")
            }
        })
    }
}

function checkValidForm() {
    const chkUserId = checkValidUsername(form),
        chkPassword = checkValidPassword(form);

    if (chkUserId && chkPassword) {
        submit.style.backgroundColor = "#02FF9B"
    } else {
        submit.style.backgroundColor = "#D3D3D3"
    }

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
        return true
    }
}

function loadUsers() {

}

function init() {
    loadUsers();
    form.password.addEventListener("input", checkValidForm);
}

init()