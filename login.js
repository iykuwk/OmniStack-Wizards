function loginUser(event) {
  event.preventDefault();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username && password) {
    alert("Welcome, " + username + "! Redirecting...");
    window.location.href = "contentpage.html";
  } else {
    alert("Please fill in all fields.");
  }
}
