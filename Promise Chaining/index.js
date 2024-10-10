const users = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((usersData) => {
    usersData.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <div class="posts"></div>
      `;

      users.appendChild(userDiv);

      // Fetch posts
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((response) => response.json())
        .then((postsData) => {
          const postsContainer = userDiv.querySelector(".posts");

          const postsHeader = document.createElement("h3");
          postsHeader.textContent = "Posts:";
          postsContainer.appendChild(postsHeader);

          postsData.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `
              <strong>${post.title}</strong><br>
              ${post.body}
            `;

            postsContainer.appendChild(postDiv);
          });
        })
        .catch((error) => {
          console.error(`Error fetching posts for user ${user.id}:`, error);

          const postsContainer = userDiv.querySelector(".posts");
          postsContainer.innerHTML = "<p>Unable to load posts.</p>";
        });
    });
  })
  .catch((error) => {
    console.error("Error fetching users:", error);

    users.innerHTML = "<p>Unable to load users.</p>";
  });
