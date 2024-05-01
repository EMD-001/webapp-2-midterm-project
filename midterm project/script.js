document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;

    fetch('https://jsonplaceholder.typicode.com/users?username=' + username)
    .then(response => response.json())
    .then(users => {
        if (users.length > 0) {
            window.location.href = "main.html?username=" + encodeURIComponent(username);
        } else {
            alert("User not found. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    });
});
