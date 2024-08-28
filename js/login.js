// Show and Hide Password Toggle for Login
function togglePassword() {
    const password = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-password');
    if (password.type === 'password') {
        password.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        password.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

// Show and Hide Password Toggle for Sign-Up Password
function toggleSignUpPassword() {
    const signupPassword = document.getElementById('signup-password');
    const toggleButton = document.getElementById('toggle-signup-password');
    if (signupPassword.type === 'password') {
        signupPassword.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        signupPassword.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

// Show and Hide Password Toggle for Confirm Password
function toggleConfirmPassword() {
    const confirmPassword = document.getElementById('confirm-password');
    const toggleButton = document.getElementById('toggle-confirm-password');
    if (confirmPassword.type === 'password') {
        confirmPassword.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        confirmPassword.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

function showSignUp() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function toggleEmployeeFields() {
    var employeeFields = document.getElementById('employee-fields');
    var employeeCheck = document.getElementById('employee-check');
    
    if (employeeCheck.checked) {
        employeeFields.style.display = 'block';
    } else {
        employeeFields.style.display = 'none';
    }
}

// Enable or disable the sign-up button based on input validity
function validateSignUpForm() {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    const signupSubmitButton = document.getElementById('signup-submit');
    signupSubmitButton.disabled = !(firstName && lastName && username && email && password && confirmPassword && password === confirmPassword);
}

// Add event listeners to input fields to validate on input
document.querySelectorAll('#signup-form input').forEach(function(element) {
    element.addEventListener('input', validateSignUpForm);
});

function saveSignUpData() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const role = document.getElementById('employee-role').value;

    // Save to localStorage (or any other storage method you prefer)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);

    alert('Details saved successfully!');
}

// Event listener for sign-up button
document.getElementById('signup-submit').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form submission to allow custom behavior
    const isEmployee = document.getElementById('employee-check').checked;

    if (isEmployee) {
        window.location.href = 'employes.html';
    } else {
        window.location.href = 'Guest.html';
    }

    saveSignUpData();  // Save the user data
});

// Prevent form zooming
document.querySelectorAll('input, select').forEach(function(element) {
    element.addEventListener('focus', function() {
        document.body.style.zoom = "1";
    });
});
