// Start of code
// Class for Traffic Users data
class TrafficUsers{
  // constructor 
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

//class for Registration
class TrafficRegister extends TrafficUsers{
  // constructor 
  constructor(uname, phone, address, email, pass){
    super(uname, pass);
    this.phoneNum = phone;
    this.add = address;
    this.emails = email;
  }
    //method to register to challan
    trafficRegister(){
      // get value from TrafficUsers json server through locolhost 3000
      axios.get('http://localhost:3000/TrafficUsers')
      .then(res => {
        // to check if username and phone and email match from data value
        let currentUsers = res.data.filter(item=>{
          return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
        });
        return this.checkLoginDetails(currentUsers); //returns boolean value true/false
      })
      .then(r =>{
          if(r == true){
            swal.fire({ //swal is SweetAlert in JavaScript
                icon: 'error', //error icon for display message
                title: 'Traffic Registration Failed', //title of pop-up message
                text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
              })
          }else{
            swal.fire({ //swal is SweetAlert in JavaScript
                icon: 'success', //success icon for display message
                title: 'Traffic Registration Success' //title of pop-up message
            })
            const data = this.makeTrafficData(); //get data from makeTrafficData
            axios.post('http://localhost:3000/TrafficUsers', data)
            .then(res => {
                console.log("Registration success");
            }).catch(e => console.log(e));

          }
      }).catch (e => console.log(e));
    }
  }
  
  //constant variable for register form
  const register = document.querySelector('#traffReg');
  if(register != null){
    // On clicking register button 
    register.addEventListener('submit', e => {
      e.preventDefault();
      let uname = document.querySelector('#unameT').value;
      let phone = document.querySelector('#phoneT').value;
      let address = document.querySelector('#addressT').value;
      let email = document.querySelector('#emailT').value;
      let pass = document.querySelector('#passwordT').value;
  
      let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
      trafficRegister.trafficRegister();
    })
  }

//Traffic Login class
class TrafficLogin extends TrafficUsers{
    constructor(uname, pass){
      super(uname, pass);
    }
    //method to login to challan
    trafficLogin(){
      // get value from json server through locolhost 3000
      axios.get('http://localhost:3000/TrafficUsers')
      .then(res => {
        // to check if username and password match from data value
        let currentUsers = res.data.filter(item=>{
          return (item.username == this.username && item.password == this.password);
        });
        return this.checkLoginDetails(currentUsers); //returns boolean value 
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
                icon: 'error', //icon for display message
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
    // On clicking login button 
    login.addEventListener('submit', e => {
      e.preventDefault();
      let uname = document.querySelector('#user').value; //get username value
      let pass = document.querySelector('#pass').value; //get password value
  
      let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
      trafficLogin.trafficLogin();
    })
  }
// End of code

// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code

// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code

// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code


// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code
// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code

// // Start of code
// // Class for Traffic Users data
// class TrafficUsers{
//   // constructor 
//     constructor(uname, pass){
//         this.username = uname;
//         this.password = pass;
//     }
//     //make data function
//     makeTrafficData(){
//         // store data in new variable
//         let data = {
//             username:this.username,
//             phone:this.phoneNum,
//             address:this.add,
//             email:this.emails,
//             password:this.password
//         }
//         return data;//returns data stored in var data
//     }
//     // to check if login is success
//     checkLoginDetails(args){
//         if(args.length > 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //class for Registration
// class TrafficRegister extends TrafficUsers{
//   // constructor 
//   constructor(uname, phone, address, email, pass){
//     super(uname, pass);
//     this.phoneNum = phone;
//     this.add = address;
//     this.emails = email;
//   }
//     //method to register to challan
//     trafficRegister(){
//       // get value from TrafficUsers json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and phone and email match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username || item.phone == this.phoneNum || item.email == this.emails);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value true/false
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //error icon for display message
//                 title: 'Traffic Registration Failed', //title of pop-up message
//                 text: 'Username, email or phone number you are trying to enter is already registered. Please try again with different value.' //description
//               })
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Traffic Registration Success' //title of pop-up message
//             })
//             const data = this.makeTrafficData(); //get data from makeTrafficData
//             axios.post('http://localhost:3000/TrafficUsers', data)
//             .then(res => {
//                 console.log("Registration success");
//             }).catch(e => console.log(e));

//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for register form
//   const register = document.querySelector('#traffReg');
//   if(register != null){
//     // On clicking register button 
//     register.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#unameT').value;
//       let phone = document.querySelector('#phoneT').value;
//       let address = document.querySelector('#addressT').value;
//       let email = document.querySelector('#emailT').value;
//       let pass = document.querySelector('#passwordT').value;
  
//       let trafficRegister = new TrafficRegister(uname, phone, address, email, pass); //class TrafficRegister()
//       trafficRegister.trafficRegister();
//     })
//   }

// //Traffic Login class
// class TrafficLogin extends TrafficUsers{
//     constructor(uname, pass){
//       super(uname, pass);
//     }
//     //method to login to challan
//     trafficLogin(){
//       // get value from json server through locolhost 3000
//       axios.get('http://localhost:3000/TrafficUsers')
//       .then(res => {
//         // to check if username and password match from data value
//         let currentUsers = res.data.filter(item=>{
//           return (item.username == this.username && item.password == this.password);
//         });
//         return this.checkLoginDetails(currentUsers); //returns boolean value 
//       })
//       .then(r =>{
//           if(r == true){
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'success', //success icon for display message
//                 title: 'Login Success', //title of pop-up message
//               })
//             window.location = "../html/TrafficChallan.html";
//           }else{
//             swal.fire({ //swal is SweetAlert in JavaScript
//                 icon: 'error', //icon for display message
//                 title: 'Login Failed', //title of pop-up message
//                 text: 'Username of password did not match! Please try again with correct username and password.' //description
//               })
//           }
//       }).catch (e => console.log(e));
//     }
//   }
  
//   //constant variable for login form
//   const login = document.querySelector('#traffLog');
//   if(login != null){
//     // On clicking login button 
//     login.addEventListener('submit', e => {
//       e.preventDefault();
//       let uname = document.querySelector('#user').value; //get username value
//       let pass = document.querySelector('#pass').value; //get password value
  
//       let trafficLogin = new TrafficLogin(uname, pass); //class TrafficLogin()
//       trafficLogin.trafficLogin();
//     })
//   }
// // End of code