// Körs när sidan laddas
setup();

function setup() {
  let userStorage = JSON.parse(localStorage.getItem("userList")) || [...registrationData];
  localStorage.setItem("userList", JSON.stringify(userStorage));
  setupToggleButtons();
  setupFormSubmissions();
}
function setupToggleButtons() {
  document.getElementById("toLoginForm").addEventListener("click", showLoginForm);
  document.getElementById("toRegisterForm").addEventListener("click", showRegisterForm);
}

function showLoginForm() {
  document.getElementById("registerForm").classList.add("d-none");
  document.getElementById("loginForm").classList.remove("d-none");
}

function showRegisterForm() {
  document.getElementById("loginForm").classList.add("d-none");
  document.getElementById("registerForm").classList.remove("d-none");
}

//Centraliserad händelsehanterare för formulärinlämningar, istället för inuti varje funktion.
function setupFormSubmissions() {
  document.querySelector("#registerForm").addEventListener("submit", handleRegistration);
  document.querySelector("#loginForm").addEventListener("submit", handleLogin);
}

function handleRegistration(event) {
  event.preventDefault();
  let registerForm = event.target;

  try {
    let name = registerForm.regName.value;
    let email = registerForm.regEmail.value;
    let username = registerForm.regUsername.value;
    let password1 = registerForm.password1.value;
    let password2 = registerForm.password2.value;
    let userList = JSON.parse(localStorage.getItem("userList"));

    if (name.length < 2) {
      throw new Error("Name must at least contain 2 characters");
    } else if (username.length < 2) {
      throw new Error("Username must be at least 4 characters long");
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
      userList.push(newUser);
      localStorage.setItem("userList", JSON.stringify(userList));
      document.querySelector("#regMsg").textContent = "User created successfully";

      // Automatiskt växla till inloggningsformuläret efter registrering
      showLoginForm();
    }
  } catch (error) {
    document.querySelector("#regMsg").textContent = error.message;
  }
}

function handleLogin(event) {
  event.preventDefault();
  let loginForm = event.target; //direkt referens - hänvisar till formuläret som utlöste submit-händelsen

  try {
    let username = loginForm.loginUsername.value;
    let password = loginForm.loginPassword.value;
    let userList = JSON.parse(localStorage.getItem("userList"));

    let user = userList.find((user) => user.username === username);

    if (user && user.password === password) {
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
  } catch (error) {
    document.querySelector("#loginMsg").textContent = error.message;
  }
}

/* Genom att använda let loginForm = event.target; och let registerForm = event.target;, får vi en direkt referens till det formulär som utlöste submit-händelsen.
Detta gör koden mer robust och flexibel, särskilt om vi någon gång vill hantera flera formulär på samma sida. */