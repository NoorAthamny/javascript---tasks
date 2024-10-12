const users = document.getElementById("users");
const loadingIndicator = document.getElementById("loading-indicator");

const usersURL = "https://jsonplaceholder.typicode.com/users";

loadingIndicator.style.display = "block";

fetch(usersURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error feching data " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.className = "item";
      userDiv.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}`;
      users.appendChild(userDiv);
    });

    loadingIndicator.style.display = "none";
  })
  .catch((error) => {
    loadingIndicator.style.display = "none";
    users.innerHTML = `<div class="item">Error: ${error.message}</div>`;
  });
