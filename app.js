const title = document.querySelector('#title');
const regForm = document.querySelector('.regForm');

const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');

const logForm = document.querySelector('.logForm');

const username = document.getElementById('username');
const password = document.getElementById('password');

const usernameAndPasswords = {};

const time = new Date().toLocaleString();

function checkIfUserExists(username, usernameAndPasswords) {
    return usernameAndPasswords.hasOwnProperty(username);
}

function validateUserNameAndPassword(username, password, usernameAndPasswords) {
    return usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] === password;
}

function validatePassword(password) {
    // Check if password is less than 8 characters
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    // Check if password only consists of integers
    if (/^\d+$/.test(password)) {
        alert("Password must not consist of integers");
        return false;
    }

    // Check if password contains both uppercase and lowercase characters
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        alert("Password must be a combination of uppercase and lowercase characters");
        return false;
    }

    return true;
}

regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (usernameReg.value.length == 0 || passwordReg.value.length == 0) {
        alert("Fill out all the forms first");
    } else {
        if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
            alert('Username is already taken');
        } else if (!validatePassword(passwordReg.value)) {
            // Validation failed, alerts are more specific now
        } else {
            usernameAndPasswords[usernameReg.value] = passwordReg.value;
            console.log(usernameAndPasswords);

            logForm.style.display = "block";
            regForm.style.display = "none";
        }
    }
});

logForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {
        logForm.style.display = "none";
        title.style.display = "none";

        document.querySelector('.welcomePanel').style.display = "block";
        document.querySelector('.welcomePanel #greeting').innerHTML = "Good day! " + username.value + ". It's currently " + time;
    } else {
        alert("Username and password don't exist");
    }
});
