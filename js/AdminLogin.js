
function logIn() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	
		// check is user input matches username and password of a current index of the objPeople array
		if(username == "admin" && password == "admin") {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
            window.location.href = "../html/AdminPage.html"
			return
		}
        swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Incorrect Username or Password!'
          })
	console.log("incorrect username or password")
    document.getElementById("login-form").reset();
}