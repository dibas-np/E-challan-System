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
      //Method to make data of challan ready through this variables
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
    
// Function to give feedback 
function TrafficChallan() { 
      let fullName = document.querySelector('#fullName').value;
      let licenceNo = document.querySelector('#licenseno').value;
  if(fullName == "" && licenceNo == "") { 
    swal.fire({ //swal is SweetAlert in JavaScript
      icon: 'warning', //error icon for display message
      title: 'Challan Error', //title of pop-up message
      text: 'Make sure all fields are not left empty!' //text in error message
    })
    }else{ //if username and password are incorrect
      Swal.fire({
        title: 'Challan Created',
        text: 'Your challan is created successfully',
        icon: 'success',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: "Print Preview",
        cancelButtonText: "Print Later"
      }).then((result) => {
        if (result.isConfirmed) { //if user clicks on yes then goes to myPrint function
          myPrint();
        }
      }) 
  }
}

//To print challan 
function myPrint() {
  // Variables of challan details
  let fullName = document.querySelector('#fullName').value;
  let address = document.querySelector('#address').value;
  let licenceNo = document.querySelector('#licenseno').value;
  let vehicleCat = document.querySelector('#vehicle').value;
  let vehicleNum = document.querySelector('#vehicleno').value;
  let createdBy = document.querySelector('#creater').value;
  let challanDate = document.querySelector('#date').value;
  let guilty = document.querySelector('#problem').value;
  let fineAmount = document.querySelector('#amount').value;

  let trafficChallanDetail = new TrafficChallanDetails(fullName, address, licenceNo, vehicleCat, vehicleNum, createdBy, challanDate, guilty, fineAmount);
  
  // use of html in sweet alert to print the challan details in pop up window
  Swal.fire({
    title: 'Print Preview',
    html: '<h2 style="text-align:left; color:red;padding-top: 10px;"> Challan Details </h2>' +
    '<h3 style="text-align: left; padding: 10px;line-height:40px;">' +
    'Name: '+ trafficChallanDetail.fullName +
    '<br>Address: ' + trafficChallanDetail.address +
    '<br>License No: ' + trafficChallanDetail.licenceNo +
    '<br>Vehicle Category: ' + trafficChallanDetail.vehicleCat +
    '<br>Vehicle No: ' + trafficChallanDetail.vehicleNum +
    '<br>Created By: ' + trafficChallanDetail.createdBy + 
    '<br>Challan Date: ' + trafficChallanDetail.challanDate+ 
    '<br>Issue For: ' + trafficChallanDetail.guilty+
    '<br>Fine Amount: ' + trafficChallanDetail.fineAmount + '</h3> -------------------------------------------------------------------',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "Print Now",
    cancelButtonText: "Print Later",
    
  }).then((result) => {
    if (result.isConfirmed) { //Checks if the user clicks Print Now
      swal.fire({ //swal is SweetAlert in JavaScript
        icon: 'success', //icon for display message
        title: 'Print Success', //title of pop-up message
        text: 'You have printed challan successfully and is stored in database of JSON server.' //text inmessage
      })
    }
    //To save in JSON Database
    trafficChallanDetail.trafficChallanDetail(); //Calling method trafficChallanDetail from the Class
  }) 

}
//end of the code