// Start of Code for Traffic Login Page
function TrafficLogin() {
	var username = document.getElementById('user').value
	var password = document.getElementById('pass').value

		// check is user input matches username and password
		if(username == "traffic" && password == "pass") {
			console.log("Login Success")
			// redirects to Challan Page if true
            window.location.href = "../html/TrafficChallan.html"
			return
		}
    
    //checks if username or password is empty and display appropriate message
    if(username.trim() ==="" || password.trim() ===""){
		swal.fire({
            icon: 'error',
            title: 'Login Error',
            text: 'Make sure all fields are not empty!'
          })
	}else{
		swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'The Username or Password is incorrect! \Please try again with proper information'
          })
		console.log("Incorrect username or password")
	}
}
// End of code