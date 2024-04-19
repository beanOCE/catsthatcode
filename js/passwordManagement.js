function togglePassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;
    return re.test(password);
}

window.onload = function () {
    var registrationForm = document.getElementById('registerForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPass').value;
            var passwordRequirements = "Password must be at least 8 characters long and contain at least one number, one capital letter, and one special character.";
            var missingRequirements = "";


            if (username.trim() === '') {
                event.preventDefault();
                document.getElementById("newusername_error").innerHTML = 'Please enter a username.';
            } else {
                event.preventDefault();
                document.getElementById("newusername_error").innerHTML = '';  
            }

            if (email.trim() === '') {
                event.preventDefault();
                document.getElementById("email_error").innerHTML = 'Please enter an email.';
            } else if (!validateEmail(email)) {
                event.preventDefault();
                document.getElementById("email_error").innerHTML = 'Please enter a valid email address.';
            } else {
                event.preventDefault();
                document.getElementById("email_error").innerHTML = '';
            }

            if (password.trim() === '') {
                event.preventDefault();
                document.getElementById("newpassword_error").innerHTML = 'Please enter a password.';
            } else if (!validatePassword(password)) {
                if (password.length < 8) {
                    missingRequirements += "At least 8 characters, ";
                }
                if (!/(?=.*\d)/.test(password)) {
                    missingRequirements += "At least one number, ";
                }
                if (!/(?=.*[A-Z])/.test(password)) {
                    missingRequirements += "At least one capital letter, ";
                }
                if (!/(?=.*\W)/.test(password)) {
                    missingRequirements += "At least one special character, ";
                }
                document.getElementById("newpassword_error").innerHTML = (passwordRequirements + "\n\nMissing requirements: " + missingRequirements);
            } else {
                event.preventDefault();
                document.getElementById("newpassword_error").innerHTML = '';
            }

            if (confirmPassword.trim() === '') {
                event.preventDefault();
                document.getElementById("confpassword_error").innerHTML = 'Please confirm password.';
            } else if (password !== confirmPassword) {
                event.preventDefault();
                document.getElementById("confpassword_error").innerHTML = 'Passwords do not match.';
            } else {
                    event.preventDefault();
                    document.getElementById("confpassword_error").innerHTML = '';
            }

            if (username.trim() != '' && email.trim() != '' && validateEmail(email) && password.trim() != '' && validatePassword(password) && confirmPassword.trim() != '' && password == confirmPassword){
                window.location.href = "index.html";
            }

        });

        document.getElementById('reset-btn').addEventListener('click', function () {
            document.getElementById('username').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmPass').value = '';
            document.getElementById("newusername_error").innerHTML = '';
            document.getElementById("email_error").innerHTML = '';
            document.getElementById("newpassword_error").innerHTML = '';
            document.getElementById("confpassword_error").innerHTML = '';
        });
    }

    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (username.trim() === '') {
                event.preventDefault();
                document.getElementById("username_error").innerHTML = 'Please enter a valid username';
            } else {
                event.preventDefault();
                document.getElementById("username_error").innerHTML = '';
            }
            
            if (password.trim() === '') {
                event.preventDefault();
                document.getElementById("password_error").innerHTML = 'Please enter a password';
            } else if (!validatePassword(password)) {
                event.preventDefault();
                document.getElementById("password_error").innerHTML = 'Please enter a valid password';
            } else {
                event.preventDefault();
                document.getElementById("password_error").innerHTML = '';
            }

            if (username.trim() != '' && password.trim != '' && validatePassword(password)) {
                window.location.href = "index.html";
            }

        });
    }
};