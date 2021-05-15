//class Signin{
  //  constructor(uname,password){
    //    super(uname, password);     
    //}
    let butn = document.querySelector('#sub-btn');
    let from = document.querySelector('#signin');
//var registerDateArr = [];

class Signin {
  constructor(uname, password){
    this.uname = uname;
    this.password = password;
     
    }
    //method to format the data to store in json server
   // creatingData(){
      //  let data= {
        //    uname: this.uname,
          //  email: this.email,
            //phonenumber: this.phonenumber,
            //address: this.address,
            //password: this.password,
        //};
        //return data;
    //}
   
   //method to login to payment
   userLogin(){
    // get value from json server through locolhost 3000
    axios.get('http://localhost:3000/register')
    .then(res => {
      // to check if username and password match from data value
      let currentUsers = res.data.filter(item=>{
        return (item.uname == this.uname && item.password == this.password);
      });
     // function checkLoginDetails(args){
        if(currentUsers.length > 0){
            return true;
        }else{
            return false;
      //  }
    }

    })
    .then(r =>{
        if(r == true){
          swal.fire({ //swal is SweetAlert in JavaScript
              icon: 'success', //success icon for display message
              title: 'Login Success', //title of pop-up message
            })
          window.location = "../html/UserPayment.html";
        }else{
          swal.fire({ //swal is SweetAlert in JavaScript
              icon: 'error', //icon for display message
              title: 'Login Failed', //title of pop-up message
              text: 'Username or Password did not Match! Please try again with correct Username and Password.'
            })
        }
    }).catch (e => console.log(e));
  }
}

//constant variable for login form
const login = document.querySelector('#signin');
if(login != null){
  // On clicking login button 
  login.addEventListener('submit', e => {
    e.preventDefault();
    let uname = document.querySelector('#username').value; //get username value
    let password = document.querySelector('#passw').value; //get password value

    let userLogin = new Signin(uname, password); //class TrafficLogin()
    userLogin.userLogin();
  })
}
// End of code

