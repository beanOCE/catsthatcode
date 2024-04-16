function togglePassword() {
    var passwordInput = document.getElementById("pass");
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
            var username = document.getElementById('user').value;
            var email = document.getElementById('address').value;
            var password = document.getElementById('pass').value;
            var confirmPassword = document.getElementById('confirm').value;

            if (username.trim() === '') {
                alert('Please enter a username.');
                return;
            }

            if (email.trim() === '') {
                alert('Please enter an email address.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            var passwordRequirements = "Password must be at least 8 characters long and contain at least one number, one capital letter, and one special character.";
            var missingRequirements = "";

            if (!validatePassword(password)) {
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

                alert(passwordRequirements + "\n\nMissing requirements: " + missingRequirements);
                return;
            }

            this.submit();
        });

        document.getElementById('reset-btn').addEventListener('click', function () {
            document.getElementById('user').value = '';
            document.getElementById('address').value = '';
            document.getElementById('pass').value = '';
            document.getElementById('confirm').value = '';
        });
    }

    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var username = document.getElementById('user').value;
            var password = document.getElementById('pass').value;

            if (username.trim() === '') {
                alert('Please enter a username.');
                return;
            }
            if (!validatePassword(password)) {
                alert('Password must meet the required criteria.');
                return;
            }
             this.submit();
        });
    }
};