document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (email && username && password) {
        alert("Account created successfully!");
    } else {
        alert("Please fill in all the fields.");
    }
});
