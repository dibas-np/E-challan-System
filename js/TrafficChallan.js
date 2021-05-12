//Form Details Keeping in JSON Server
class TrafficChallanDetails{ //Class TrafficChallanDetails 
    //Constructor to store datas of form as given names/parameters
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
        let dataTrafficChallan = {
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
    
        //returns all values as dataTrafficChallan
        return dataTrafficChallan;
      }
      //Method : Functions to post user input data in JSON Server
      trafficChallanDetail(){
        const data = this.makeDataChallan(); 
        //Use of axios.post
        axios.post('http://localhost:3000/ChallanDetails', data) //using 3000 as default port
        .then(()=>{
            console.log("New Challan Recorded."); //Display output in console if submission is successful
          }).catch((errorStore)=>{ //to Catch errors, if error occurs
            console.log(errorStore);
          });
      }
    
    }
    
    //challan form 
    let challanForm = document.querySelector('#challan');
    challanForm.addEventListener('submit', (eventObj)=>{
      eventObj.preventDefault(); //Prevents default behaviour
      let fullName = document.querySelector('#fullName').value;
      let address = document.querySelector('#address').value;
      let licenceNo = document.querySelector('#licenseno').value;
      let vehicleCat = document.querySelector('#vehicle').value;
      let vehicleNum = document.querySelector('#vehicleno').value;
      let createdBy = document.querySelector('#creater').value;
      let challanDate = document.querySelector('#date').value;
      let guilty = document.querySelector('#problem').value;
      let fineAmount = document.querySelector('#amount').value;
      
      //Making new object of the class TrafficChallanDetails
      let trafficChallanDetail = new TrafficChallanDetails(fullName, address, licenceNo, vehicleCat, vehicleNum, createdBy, challanDate, guilty, fineAmount);
      trafficChallanDetail.trafficChallanDetail(); //Calling method trafficChallanDetail from the Class
    
      eventObj.target.reset(); //Resets this form after every submission 
    });



//To print challan 
    function myPrint(challan) {
        var printdata = document.querySelector(".challan-detail");
        newwin = window.open("");
        newwin.document.write(printdata.outerHTML);
        newwin.print();
        newwin.close();
    }
    //end of the code