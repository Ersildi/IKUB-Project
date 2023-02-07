const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn_signin");
const loginError = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  if (username === "Ersildi" && password === "donaldi") {
    location.reload();
    window.location.href = "todoapp.html";
  }
});
