// Default login credentials
const validUsername = "admin";
const validPassword = "12345";

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Intentional JavaScript error (missing closing parenthesis)
  if (username === validUsername && password === validPassword {
    message.textContent = "Login successful!";
    message.className = "message success";
  } else {
    message.textContent = "Invalid username or password!";
    message.className = "message error";
  }
}
