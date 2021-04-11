//Admin Login Page
function logIn() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

		// check is user input matches username and password
		if(username == "admin" && password == "admin") {
			console.log(username + " is logged in!!!")
			// redirects to Admin Page if true
            window.location.href = "../html/AdminPage.html"
			return
		}
    
    //checks if username or password is empty and display appropriate message
    if(username.trim() ==="" || password.trim() ===""){
		swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Username or Password can\'t be empty!'
          })
	}else{
		swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Incorrect Username or Password!'
          })
		console.log("incorrect username or password")
        document.getElementById("login-form").reset();
	}
	
}