const users = document.getElementById("users");
const error = document.getElementById("error");

fetch("https://jsonplaceholder.typicode.com/users1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `<h2>${user.name}</h2><p><strong>Email:</strong> ${user.email}</p>`;
      users.appendChild(userDiv);
    });
  })
  .catch((err) => {
    console.error(`${err.message}. Please try again later.`);
    error.textContent = `${err.message}. Please try again later.`;
  });
