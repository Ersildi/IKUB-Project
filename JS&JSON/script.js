const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn_signin");
const loginError = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  if (username === "Ersildi" && password === "1234") {
    location.reload();
    window.location.href = "todoapp.html";
  }
});

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = registerForm.username.value;
  const password = registerForm.password.value;
  if (username === "" && email === "" && password === "") {
    location.reload();
    window.location.href = "/HTML/todoapp.html";
  }
});
