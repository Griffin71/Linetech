document.querySelector('button').addEventListener('click', function() {
    // Change button color when clicked
    this.style.backgroundColor = '#1abc9c';
    
    // Trigger fade-out effect
    handleButtonClick();
});

function handleButtonClick() {
    const container = document.querySelector('.welcome-container');
    
    // Add fade-out class for smooth transition
    container.classList.add('fade-out');
    
    // Delay navigation to the next page to allow the transition to complete
    setTimeout(() => {
        location.href = 'login.html';
    }, 500); // Matches the transition time in CSS
}
