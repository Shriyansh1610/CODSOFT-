// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
    // Clear the form after submission
    document.getElementById('contactForm').reset();
});
