document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can add your authentication logic here
    if (username === "yourUsername" && password === "yourPassword") {
        // Successful login
        window.location.href = "welcome.html"; // Redirect to the welcome page
    } else {
        // Display an error message
        document.getElementById("error-message").textContent = "Invalid username or password";}
});