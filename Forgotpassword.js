function validateForgotPasswordForm() {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9!#$%^&*]+@[a-zA-Z0-9.-]*[!#$%^&*][a-zA-Z0-9.-]*\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Simulate sending a reset password email
    alert("Password reset instructions have been sent to your email.");
    return true;
}

