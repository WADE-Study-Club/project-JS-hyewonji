const form = document.querySelector(".logIn__form");
const submit = form.querySelector(".logIn_btn");
const users_LS = "users";
let users = []


function saveUsers() {
    localStorage.setItem(users_LS, JSON.stringify(users))
}

function checkUsers() {
    const loadUsers = localStorage.getItem(users_LS);
    const parsedUsers = JSON.parse(loadUsers);
    const userId = form.userId.value;
    const password = form.password.value;
    const userInfo = {
        id: userId,
        password: password
    }
    let exist = false;

    if (loadUsers !== null) {
        parsedUsers.some(function (user) {
            if (user.id === userId) {
                alert("Error: The Email Address Is Already In Use By Another Account.")
                exist = true;
            }
        })
    }

    if (exist === false) {
        parsedUsers.push(userInfo);
        users = parsedUsers;
        console.log(parsedUsers, users);
        saveUsers();
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

function init() {
    form.password.addEventListener("input", checkValidForm);
    submit.addEventListener("click", checkUsers)
}

init()

//{"id":"hyewon@naver.com","password":"123456"}