const form = document.querySelector(".logIn__form");
const submit = form.querySelector(".logIn_btn");
const notes = document.querySelector(".notes");
const users_LS = "users";

function checkUsers() {
    const chkUserId = checkValidUsername(form)
    if (chkUserId === false) {
        notes.style = "display:block";
        notes.innerHTML = "Error: The Email Address Is Badly Formatted.";
    }

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
    } else {
        console.log("Sign up Please")
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

function init() {
    form.userId.addEventListener("input", checkValidForm);
    form.password.addEventListener("input", checkValidForm);
    submit.addEventListener("click", checkUsers)
}

init()