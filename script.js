function loginUser(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username && password) {
    alert("Welcome, " + username + "! Redirecting...");
    window.location.href = "about.html";
  } else {
    alert("Please fill in all fields.");
  }
}
