const api = "http://localhost:3000/users";

function getUsers(data) {
  console.log(data);
}

fetch("http://localhost:3000/users/1")
  .then((response) => response.json())
  .then((data) => {
    let [firstObject] = data;
    let { property1, property2 } = firstObject;
    console.log(property1);
    console.log(property2);
  });

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn_signin");

const usernameDB = loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  if (username === "user" && password === "user") {
    location.reload();
    window.location.href = "/HTML/todoapp.html";
  }
});

// async function createUser(user) {
//   if (user && user.username && user.email && user.password) {
//     const fatchObjectResponse = await fetch(api, {
//       method: "GET",
//       body: JSON.stringify(user),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });
//     const response = await fetchObjectResponse.json();
//   }
// }

// registerButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   const username = registerForm.username.value;
//   const password = registerForm.password.value;
//   if (username === "" && email === "" && password === "") {
//     location.reload();
//     window.location.href = "/HTML/todoapp.html";
//   }
// });

// function getUsers() {}

// async function createUser(user) {
//   if (user && user.username && user.email && user.password) {
//     const fatchObjectResponse = await fetch(api, {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });
//     const response = await fetchObjectResponse.json();
//   }
// }

// const userFormElement = document.querySelector("form");
// userFormElement.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const userFormData = new FormData(userFormElement);
//   const user = {
//     username: userFormData.get("username"),
//     email: userFormData.get("email"),
//     password: userFormData.get("password"),
//   };
//   createUser(user);
// });

// const form = document.querySelector("#register-form");
// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const user = {};
//   formData.forEach((value, key) => {
//     user[key] = value;
//   });
//   const response = await fetch(api, {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     console.log("User registered successfully");
//   } else {
//     console.error("Error registering user");
//   }
// });
