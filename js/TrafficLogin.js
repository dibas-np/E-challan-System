// Start of Code 
// Function TrafficLogin is made to call it when Login button is pressed
function TrafficLogin() { 
	var username = document.getElementById('user').value //variable to store username
	var password = document.getElementById('pass').value //variable to store password
		// to check is user input matches username and password
		if(username == "traffic" && password == "pass") { //initial values for frontend part
			//Backend will have values from database in Sprint 2
            window.location.href = "../html/TrafficChallan.html" // redirects to Challan Page if true
			// return
		}
    //checks if username or password is empty and display appropriate message
    if(username.trim() ==="" || password.trim() ===""){
		swal.fire({ //swal is SweetAlert in JavaScript
            icon: 'error', //error icon for display message
            title: 'Login Error', //title of pop-up message
            text: 'Make sure all fields are not empty!' //text in error message
          })
	}else{ //if username and password are incorrect
		swal.fire({ //swal is SweetAlert in JavaScript
            icon: 'error', //error icon for display message
            title: 'Input Error', //title of pop-up message
            text: 'The Username or Password is incorrect! Please try again with proper information' //text in error message
          })
	}
}
// End of code