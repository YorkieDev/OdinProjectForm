document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('passwordMismatch').style.display = 'inline';
    } else {
        // Handle successful form submission here, e.g., send data to server
        console.log('Form submitted successfully!');
    }
});