const api = "http://localhost:3000/users";

function registerUsers() {}

async function createUser(user) {
  if (user && user.firstName && user.lastName && user.email) {
    const fatchObjectResponse = await fetch(api, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log(fatchObjectResponse);

    // const { status, statusText } = fetchObjectResponse;
    // if (status >= 400) {
    //   const tostElement = document.querySelector(".toast");
    //   const toastBodyElement = document.querySelector(".toast-body");
    //   const DURATION = 3000;

    //   toastBodyElement.innerText = statusText;
    //   tostElement.classList.add("bg-danger");
    //   tostElement.classList.add("show");

    const response = await fetchObjectResponse.json();
    console.log(response);
  }
}
