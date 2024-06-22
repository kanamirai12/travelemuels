document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    document.getElementById('displayName').textContent = `Name: ${name}`;
    document.getElementById('displayEmail').textContent = `Email: ${email}`;
    document.getElementById('displayMessage').textContent = `Message: ${message}`;
    
    document.getElementById('formData').style.display = 'block';
});
