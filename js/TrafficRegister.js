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
        register.trafficRegister();

        e.target.reset();
    });

}