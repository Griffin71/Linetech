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

// Function to handle saving user data on sign-up
function saveSignUpData() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('employee-role').value;

    // Save to localStorage (or any other storage method you prefer)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('role', role);

    alert('Details saved successfully!');
}

// Add event listener to the sign-up form to save data on submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    saveSignUpData();   // Call the function to save the data
});
