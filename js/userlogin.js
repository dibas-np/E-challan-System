 let butn = document.querySelector('#sub-btn');
 let from = document.querySelector('#signin');

class Signin {
  constructor(uname, password){
    this.uname = uname;
    this.password = password;
     
    }
  
   userLogin(){
    // get value from json server locolhost 3000
    axios.get('http://localhost:3000/register')
    .then(res => {
      // if username and password are coorect or not
      let currentUsers = res.data.filter(item=>{
        return (item.uname == this.uname && item.password == this.password);
      });

        if(currentUsers.length > 0){
            return true;
        }else{
            return false;
      //  }
    }

    })
    .then(r =>{
        if(r == true){
          swal.fire({ 
              icon: 'success', 
              title: 'Login Success', 
            })
          window.location = "../html/UserPayment.html";
        }else{
          swal.fire({ 
              icon: 'error', 
              title: 'Login Failed', 
              text: 'Username or Password did not Match! Please try again with correct Username and Password.'
            })
        }
    }).catch (e => console.log(e));
  }
}


const login = document.querySelector('#signin');
if(login != null){
  // On clicking login button 
  login.addEventListener('submit', e => {
    e.preventDefault();
    let uname = document.querySelector('#username').value; //get username 
    let password = document.querySelector('#passw').value; //get password 

    let userLogin = new Signin(uname, password); 
    userLogin.userLogin();
  })
}


