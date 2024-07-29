setup();

function setup() {
  let userStorage = JSON.parse(localStorage.getItem("userList")) || [...registrationData];
  localStorage.setItem("userList", JSON.stringify(userStorage));
  validateLogin(userStorage);
  validateRegistration(userStorage);
}

function validateRegistration(userList) {
  let registerform = document.querySelector("#registerForm");

  registerform.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
      let name = event.target.regName.value;
      let email = event.target.regEmail.value;
      let username = event.target.regUsername.value;
      let password1 = event.target.password1.value;
      let password2 = event.target.password2.value;

      if (name.length < 2) {
        throw new Error("Name must at least contain 2 characters");
      } else if (username.length < 2) {
        throw new Error("Username must be at least 2 characters long");
      } else if (password1.length < 4) {
        throw new Error("Password must be at least 4 characters long");
      } else if (password1 !== password2) {
        throw new Error("Passwords must match");
      } else if (userList.some((user) => user.username === username)) {
        throw new Error("Username already exists");
      } else {
        let newUser = {
          name: name,
          email: email,
          username: username,
          password: password1,
        };
        let storedUsers = JSON.parse(localStorage.getItem("userList"));
        storedUsers.push(newUser);
        localStorage.setItem("userList", JSON.stringify(storedUsers));
        document.querySelector("#regMsg").textContent = "User created successfully";
      }
    } catch (error) {
      document.querySelector("#regMsg").textContent = error.message;
    }
  });
}

function validateLogin(userList) {
  let loginForm = document.querySelector(`#loginForm`);

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");

    try {
      let username = event.target.loginUsername.value;
      let password = event.target.loginPassword.value;

      if (userList.some((user) => user.username === username)) {
        let user = userList.find((user) => user.username === username);
        if (user.password === password) {
          document.querySelector("#loginMsg").textContent = "Login successful";

          // Hide forms
          document.querySelector(".form").style.display = "none";

          // Show welcome message
          let welcomeMessage = document.createElement("h2");
          welcomeMessage.textContent = `Welcome, ${user.name}!`;
          document.body.appendChild(welcomeMessage);
        } else {
          throw new Error("Incorrect username or password");
        }
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      document.querySelector("#loginMsg").textContent = error.message;
    }
  });
}
