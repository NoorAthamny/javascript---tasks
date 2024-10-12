const usersCon = document.getElementById("users");
const postsCon = document.getElementById("posts");
const errorCon = document.getElementById("error");

const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

const userPromise = fetch(usersURL).then((response) => {
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  } else {
    return response.json();
  }
});

const postsPromise = fetch(postsURL).then((response) => {
  if (!response.ok) {
    throw new Error("Failed to fetch posts data");
  } else {
    return response.json();
  }
});

Promise.all([userPromise, postsPromise])
  .then(([users, posts]) => {
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      usersCon.appendChild(userDiv);
    });

    posts.forEach((post) => {
      const postsDiv = document.createElement("div");
      postsDiv.classList.add("item");
      postsDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postsCon.appendChild(postsDiv);
    });
  })
  .catch((error) => {
    console.error(`Error FOUND: ${error.message}`);
    const errorDiv = document.createElement("div");
    errorDiv.innerText = `Error FOUND: ${error.message}`;
    errorCon.appendChild(errorDiv);
  });
