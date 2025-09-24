function validateFormAndRedirect(event, formType) {
    event.preventDefault();

    let formValid = true;
    const inputs = event.target.querySelectorAll('input');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            formValid = false;
        }
    });

    if (formValid) {
        if (formType === 'signup') {
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmpassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                formValid = false;
            }
        }
    }

    if (formValid) {
        if (formType === 'login') {
            const username = document.getElementById("username").value.trim();
             localStorage.setItem('loggedInUsername', username);
            alert("Welcome, " + username + "! Redirecting...");
        } else {
            alert("Registration successful! Redirecting...");
        }
        window.location.href = "contentpage.html";
    } else {
        alert("Please fill in all fields correctly.");
    }
}