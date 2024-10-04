function checkPassword() {
    const correctPassword = "mypassword";  // Change this to your desired password
    const inputPassword = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (inputPassword === correctPassword) {
        // Redirect to the protected page
        window.location.href = "coming-soon.html";  // Change to the page you want to redirect to
    } else {
        message.textContent = "Incorrect password. Please try again.";
    }
}
