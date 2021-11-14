document.getElementById('login-submit').addEventListener('click', function() {
    // console.log('click the button');
    //get user email 
    //see for mind input=value;
    //input = value;
    //text = innerText;
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //check email and password 

    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'bankOne.html';
        // console.log('valid user');
    }
})