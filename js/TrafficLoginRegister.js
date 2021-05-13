// Start of code
// Class for Traffic Users data
class TrafficUsers{
    constructor(uname, pass){
        this.username = uname;
        this.password = pass;
    }

    //make data function
    makeTrafficData(){
        // store data in new variable
        let data = {
            username:this.username,
            phone:this.phoneNum,
            address:this.add,
            email:this.emails,
            password:this.password
        }
        return data;//returns data stored in var data
    }

    // to check if login is success
    checkLoginDetails(args){
        if(args.length > 0){
            return true;
        }else{
            return false;
        }
    }
}

//class for Refistration
class TrafficRegister extends TrafficUsers{
    // Constructor
    constructor(uname, phone, address, email, pass){
        super(uname, pass);
        this.phoneNum = phone;
        this.add = address;
        this.emails = email;
    }

    // Method to register
    trafficRegister(){
        const data = this.makeTrafficData(); //get data from makeTrafficData
        axios.post('http://localhost:3000/TrafficUsers', data)
        .then(res => {
            console.log("Regisration success");
        }).catch(e => console.log(e));
    }
}

let register = document.querySelector("#traffReg");

if(register != null){
    register.addEventListener('submit', e => {
        e.preventDefault();
        let uname = document.querySelector('#unameT').value;
        let phone = document.querySelector('#phoneT').value;
        let address = document.querySelector('#addressT').value;
        let email = document.querySelector('#emailT').value;
        let pass = document.querySelector('#passwordT').value;

        let register = new TrafficRegister(uname, phone, address, email, pass);
        register.trafficRegister(); //calling method from trafficRegister class

        e.target.reset();
    });
}


//Traffic Login class
class TrafficLogin extends TrafficUsers{
    constructor(uname, pass){
      super(uname, pass);
    }
  
    //method to login to challan
    trafficLogin(){
      axios.get('http://localhost:3000/TrafficUsers')
      .then(res => {
        let currentUsers = res.data.filter(item=>{
          return (item.username == this.username && item.password == this.password);
        });
        return this.checkLoginDetails(currentUsers);
      })
      .then(r =>{
          if(r == true){
            swal.fire({ //swal is SweetAlert in JavaScript
                icon: 'success', //success icon for display message
                title: 'Login Success', //title of pop-up message
              })
            window.location = "../html/TrafficChallan.html";
          }else{
            swal.fire({ //swal is SweetAlert in JavaScript
                icon: 'error', //success icon for display message
                title: 'Login Failed', //title of pop-up message
                text: 'Username of password did not match! Please try again with correct username and password.' //description
              })
          }
      }).catch (e => console.log(e));
    }
  }
  
  //constant variable for login form
  const login = document.querySelector('#traffLog');
  if(login != null){
    login.addEventListener('submit', e => {
      e.preventDefault();
      let uname = document.querySelector('#user').value;
      let pass = document.querySelector('#pass').value;
  
      let trafficLogin = new TrafficLogin(uname, pass);
      trafficLogin.trafficLogin();
  
    })
  }

// // Window event load on Challan Page
// window.addEventListener('load', e =>{
//     if(localStorage.isLogin == null || localStorage.isLogin == 'false'){
//         //goes to login page if no login attempt is done
//         window.location = "../html/TrafficLogin.html"; 
//     }
// })

// End of code