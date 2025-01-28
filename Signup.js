function validateSignUpForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9!#$%^&*]+@[a-zA-Z0-9!#$%^&*.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Password validation
    if (password.length < 6) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Password must be at least 6 characters.';
        return false;
    }

    // Password and Confirm Password match validation
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    // Simulate account creation
    alert("Your account has been created successfully!");
    return true;
}

