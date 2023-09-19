
function validateFullName() {
    const fullName = document.getElementById('fullName').value;
    const fullNameError = document.getElementById('fullNameError');
    const validName = /^[A-Za-z\s]{3,}$/.test(fullName);
    fullNameError.textContent = validName ? '' : 'Invalid name (min. 3 characters)';
    return validName;
}


function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    emailError.textContent = validEmail ? '' : 'Invalid email format';
    return validEmail;
}


function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const validPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
    passwordError.textContent = validPassword ? '' : 'Invalid password (min. 8 characters with letters, and numbers)';
    return validPassword;
}


function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const passwordMatch = password === confirmPassword;
    confirmPasswordError.textContent = passwordMatch ? '' : 'Passwords do not match';
    return passwordMatch;
}


function calculateAge() {
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobDate.getFullYear();
    
    if (isNaN(age)) {
        dobError.textContent = 'Invalid date format (YYYY-MM-DD)';
        return false;
    }

    if (currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) {
        age--;
    }

    dobError.textContent = age >= 18 ? '' : 'You must be at least 18 years old';
    return age >= 18;
}


document.getElementById('fullName').addEventListener('input', validateFullName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirmPassword').addEventListener('input', validatePasswordMatch);
document.getElementById('dob').addEventListener('input', calculateAge);
