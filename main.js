// error message

// Event Listener
document.getElementById('msg').addEventListener('click', errorMessage)

// Event function
function errorMessage() {
    //Input
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value
    // tester
    if (name == 'User123' && password == '12345') {
        
        // upafe gaming
        document.getElementById('msg').innerHTML = 'Sign in Sucessfull'
    } else {
        document.getElementById('msg').innerHTML = 'Sign in Unsucessfull'
    }
}