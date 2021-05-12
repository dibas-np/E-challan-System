var selectedRow = null;
let form = document.querySelector('.main-form');

/**
 * reading data from json server and calling insertNewRecord() function to display it
 */
function displayData() {
    axios.get('http://localhost:3000/ChallanDetails')
        .then(response => response.data)
        .then(data => {
            data.forEach(item => {
                var formData = {};
                formData["fullName"] = item.fullName;
                formData["address"] = item.address;
                formData["licenseno"] = item.licenceNo;
                formData["vehicle"] = item.vehicleCat;
                formData["vehicleno"] = item.vehicleNum;
                formData["creater"] = item.createdBy;
                formData["date"] = item.challanDate;
                formData["problem"] = item.guilty;
                formData["amount"] = item.fineAmount;
                insertNewRecord(formData);
            })
        })
}
displayData();

/**
 * function which triggers when form is submitted
 */
function onFormSubmit() {
    if (form != null) {
        var formData = readFormData();
        if (selectedRow == null) {
            Swal.fire({
                title: 'Do you want to create challan?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Create`,
                denyButtonText: `Don't create`,
            }).then((result) => {
                if (result.isConfirmed) {
                    insertNewRecord(formData);
                    addDataToJson(formData);
                    Swal.fire('Challan created!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Challan wasn\'t created!', '', 'info')
                }
            })
        } else{
            Swal.fire({
                title: 'Do you want to update challan?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Update`,
                denyButtonText: `Don't update`,
            }).then((result) => {
                if (result.isConfirmed) {
                    updateRecord(formData);
                    Swal.fire('Challan updated!', '', 'success')
                } else if (result.isDenied) {
                    Swal.fire('Challan wasn\'t updated!', '', 'info')
                }
            })
        }
        resetForm();
    }
   
}

/**
 * reading the data from form
 * @returns formData
 */
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["address"] = document.getElementById("address").value;
    formData["licenseno"] = document.getElementById("licenseno").value;
    formData["vehicle"] = document.getElementById("vehicle").value;
    formData["vehicleno"] = document.getElementById("vehicleno").value;
    formData["creater"] = document.getElementById("creater").value;
    formData["date"] = document.getElementById("date").value;
    formData["problem"] = document.getElementById("problem").value;
    formData["amount"] = document.getElementById("amount").value;
    return formData;
}

/**
 * inserting data to the table 
 * @param {} data 
 */
function insertNewRecord(data) {
    var table = document.getElementById("challanList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.date;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.licenseno;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.creater;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.vehicle;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.address;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.vehicleno;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.problem;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.amount;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a style="position: relative;
                        display: inline-block;
                        padding: 8px 15px;
                        color: #fff;
                        background: #666600;
                        font-size: 12px;
                        text-decoration: none;
                        text-transform: uppercase;
                        overflow: hidden;
                        transition: .5s;" onClick="onEdit(this)">Edit</a>
                       <a style="position: relative;
                       display: inline-block;
                       padding: 8px 15px;
                       color: #fff;
                       background: #dc143c;
                       font-size: 13px;
                       text-decoration: none;
                       text-transform: uppercase;
                       overflow: hidden;
                       transition: .5s;" onClick="onDelete(this)">Delete</a>`;
}

/**
 * //formatting data to add to json
 * @param {*} data 
 * @returns challanData
 */
function formatChallanData(data) {
    let challanData = {
        fullName: data.fullName,
        address: data.address,
        licenceNo: data.licenseno,
        vehicleCat: data.vehicle,
        vehicleNum: data.vehicleno,
        createdBy: data.creater,
        challanDate: data.date,
        guilty: data.problem,
        fineAmount: data.amount
    };
    return challanData;
}

/**
 * adding data to JSON
 * @param {*} challan 
 */
function addDataToJson(challan) {
    const data = formatChallanData(challan);
    //Use of axios.post
    axios.post('http://localhost:3000/ChallanDetails', data) //using 3000 as default port
        .then(() => {
            console.log("New Challan Recorded."); //Display output in console if submission is successful
        }).catch((errorStore) => { //to Catch errors, if error occurs
            console.log(errorStore);
        });
}

/**
 * function to update data to json
 * @param {*} challan 
 */
function updateDataToJson(challan) {
    const data = formatChallanData(challan);
    //Use of axios.post
    axios.post('http://localhost:3000/ChallanDetails', data) //using 3000 as default port
        .then(() => {
            console.log("New Challan Updated."); //Display output in console if submission is successful
        }).catch((errorStore) => { //to Catch errors, if error occurs
            console.log(errorStore);
        });
}

/**
 * function to delete data from json
 * @param {} id to be deleted
 */
function deleteDataFromJson(id) {
    console.log(id);
    let toDelete;
    axios.get('http://localhost:3000/ChallanDetails')
        .then(response => response.data)
        .then(data => {
           console.log(data[id-1].id);
           toDelete=data[id-1].id;
           console.log("To Delete"+toDelete);
           deleteLink = 'http://localhost:3000/ChallanDetails/'+toDelete;
           axios.delete(deleteLink);
        })
}

/**
 * function to reset form
 */
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("licenseno").value = "";
    let vehc = document.getElementById("vehicle");
    document.getElementById("vehicle").value = vehc.options[0].value;
    document.getElementById("vehicleno").value = "";
    document.getElementById("creater").value = "";
    document.getElementById("date").value = "";
    document.getElementById("problem").value = "";
    document.getElementById("amount").value = "";
    selectedRow = null;
}

/**
 * on edit event function
 * @param {*} td 
 */
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    selectedRowIndex = td.parentElement.parentElement.rowIndex;
    document.getElementById("date").value =  selectedRow.cells[0].innerHTML;
    document.getElementById("fullName").value =  selectedRow.cells[1].innerHTML;
    document.getElementById("licenseno").value =  selectedRow.cells[2].innerHTML;
    document.getElementById("creater").value =  selectedRow.cells[3].innerHTML;
    document.getElementById("vehicle").value =  selectedRow.cells[4].innerHTML; 
    document.getElementById("address").value =  selectedRow.cells[5].innerHTML;
    document.getElementById("vehicleno").value =  selectedRow.cells[6].innerHTML;
    document.getElementById("problem").value =  selectedRow.cells[7].innerHTML;
    document.getElementById("amount").value =  selectedRow.cells[8].innerHTML;
}

/**
 * function to update table and json
 * @param {*} formData 
 */
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.date;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.licenseno;
    selectedRow.cells[3].innerHTML = formData.creater; 
    selectedRow.cells[4].innerHTML = formData.vehicle; 
    selectedRow.cells[5].innerHTML = formData.address;
    selectedRow.cells[6].innerHTML = formData.vehicleno;
    selectedRow.cells[7].innerHTML = formData.problem;
    selectedRow.cells[8].innerHTML = formData.amount;

    //confirmation popup
    Swal.fire({
        title: 'Are you sure you want to update?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Update`,
        denyButtonText: `Don't update`,
    }).then((result) => {
        if (result.isConfirmed) {
            updateDataToJson(formData);
            deleteDataFromJson(selectedRowIndex);
            Swal.fire('Updated!', '', 'success');
            window.location.reload();
        } else if (result.isDenied) {
            Swal.fire('Challan isn\'t updated!', '', 'info')
        }
    })
}

/**
 * on delete event function
 * @param {*} td table element
 */
function onDelete(td) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {
              row = td.parentElement.parentElement;
              index = row.rowIndex;
              document.getElementById("challanList").deleteRow(row.rowIndex);
              deleteDataFromJson(index);
              resetForm();
              Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
              )
          }
      })
}
