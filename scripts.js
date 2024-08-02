document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let valid = true;

    // Username validation
    if (username.length < 3 || username.length > 10) {
        document.getElementById('usernameError').innerText = 'Username must be between 3 and 10 characters.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
        document.getElementById('usernameError').style.display = 'none';
    }

    // Age validation
    if (age < 18 || age > 99) {
        document.getElementById('ageError').innerText = 'Age must be between 18 and 99.';
        document.getElementById('ageError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('ageError').innerText = '';
        document.getElementById('ageError').style.display = 'none';
    }

    if (valid) {
        document.getElementById('result').innerText = 'Form submitted successfully!';
    } else {
        document.getElementById('result').innerText = 'Please correct the errors above.';
    }
});
