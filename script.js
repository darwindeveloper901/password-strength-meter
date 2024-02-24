function checkStrength() {
    var password = document.getElementById('password').value;
    var strength = "";

    if (password.length < 8) {
        strength = "Weak";
    } else if (!/\d/.test(password)) {
        strength = "Weak";
    } else if (!/[a-z]/.test(password)) {
        strength = "Weak";
    } else if (!/[A-Z]/.test(password)) {
        strength = "Weak";
    } else if (!/[^A-Za-z0-9]/.test(password)) {
        strength = "Weak";
    } else {
        strength = "Strong";
    }

    document.getElementById('result').innerText = "The strength of the password is: " + strength;
}

function clearPassword() {
    document.getElementById('password').value = "";
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleButton = document.querySelector('.toggle-password');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }


}
