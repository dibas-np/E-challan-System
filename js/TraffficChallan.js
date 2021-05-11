// Admission Form Details Keeping in JSON Server
class TrafficChallanDetails{ //Class TrafficChallanDetails 
    //Constructor to store datas of admission form as given names/parameters
      constructor(fullName, address, licenceNo, vehicleCat, vehicleNum, createdBy, challanDate, guilty, fineAmount){
        this.fullName = fullName;
        this.address = address;
        this.licenceNo = licenceNo;
        this.vehicleCat = vehicleCat;
        this.vehicleNum = vehicleNum;
        this.createdBy = createdBy;
        this.challanDate = challanDate;
        this.guilty = guilty;
        this.fineAmount = fineAmount;
      }
    
      //Method to make data of admission ready through this variables
      makeDataChallan(){
        let dataAdmission = {
          fullName : this.fullName,
          address : this.address,
          licenceNo : this.licenceNo,
          vehicleCat : this.vehicleCat,
          vehicleNum : this.vehicleNum,
          createdBy : this.createdBy,
          challanDate : this.challanDate,
          guilty : this.guilty,
          fineAmount : this.fineAmount
        };
    
        //returns all values as dataAdmission
        return dataAdmission;
      }
      //Method : Functions to post user input data in JSON Server
      trafficChallanDetail(){
        const data = this.makeDataChallan(); 
        //Use of axios.post
        axios.post('http://localhost:3000/NewAdmission', data) //using 3000 as default port
        .then(()=>{
            console.log("New Admission Request Recorded."); //Display output in console if submission is successful
          }).catch((errorStore)=>{ //to Catch errors, if error occurs
            console.log(errorStore);
          });
      }
    
    }
    
    //admission form 
    let admissionForm = document.querySelector('.admission-form');
    admissionForm.addEventListener('submit', (eventObj)=>{
      eventObj.preventDefault(); //Prevents default behaviour
      // Admission Form variables(values) declaration
      let fullName = document.querySelector('#fullName').value;
      let address = document.querySelector('#address').value;
      let licenceNo = document.querySelector('#licenceNo').value;
      let vehicleCat = document.querySelector('#date').value;
      let vehicleNum = document.querySelector('#level').value;
      let createdBy = document.querySelector('.full-name').value;
      let challanDate = document.querySelector('#challanDate').value;
      let address = document.querySelector('#address').value;
      let fineAmount = document.querySelector('#fineAmount').value;
      
      //Making new object of the class TrafficChallanDetails
      let trafficChallanDetail = new TrafficChallanDetails(fullName, address, licenceNo, vehicleCat, vehicleNum, createdBy, challanDate, address, fineAmount);
      trafficChallanDetail.trafficChallanDetail(); //Calling method trafficChallanDetail from the Class
    
      eventObj.target.reset(); //Resets this form after every submission 
    });
    //end of the code
    
    
    