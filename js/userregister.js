let btn = document.querySelector('.submit-btn');
let form = document.querySelector('#register');
var registerDateArr = [];

class Register{
    constructor(uname,email,phonenumber,address,password){
        this.uname = uname;
        this.email = email;
        this.phonenumber = phonenumber;
        this.address = address;
        this.password = password;
    }
    //method to format the data to store in json server
    creatingData(){
        let data= {
            uname: this.uname,
            email: this.email,
            phonenumber: this.phonenumber,
            address: this.address,
            password: this.password,
        };
        return data;
    }
    //method to store the data in the json server
    register(){
        const data = this.creatingData();
        axios.post('http://localhost:3000/register',data).then(()=>{
            console.log("Register Data has been Successfully Sent...");
    
        }).catch((e)=>{
            console.log("There is an Error:"+e);
        });
    }
}

if (form != null) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire(
            'Success...',
            'Your Message has been Successfully Submitted...',
            'Success...'
          )

        let uname = document.querySelector('#urname').value;
        let email = document.querySelector('#mail').value;
        let phonenumber = document.querySelector("#number").value;
        let address = document.querySelector('#add').value;
        let password = document.querySelector("#pass").value;

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let registerData = {
            registerDate: date,
            registerTime: time
        }
        //using local storage to store data and time
        registerDateArr.push(registerData);
        localStorage.setItem("register date", JSON.stringify(registerDateArr));

        let register = new Register(uname, email, phonenumber, address, password);
        register.register();

        e.target.reset();
    });
}

