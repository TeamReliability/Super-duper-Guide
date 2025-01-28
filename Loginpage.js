function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
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

    // Basic password validation (at least 6 characters)
    if (password.length < 6) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Password must be at least 6 characters.';
        return false;
    }

    // If validation passes, form can be submitted
    return true;
}

