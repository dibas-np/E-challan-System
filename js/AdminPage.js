
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

var selectedRow = null;
let form = document.querySelector('.main-form');

function onFormSubmit() {
    if (form!=null) {
        var formData = readFormData();
        if (selectedRow == null){
             insertNewRecord(formData);
             addDataToJson(formData);
        }  
        else
            updateRecord(formData);
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
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
//Method to format data to add to json
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

    //returns all values as dataTrafficChallan
    return challanData;
}

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

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
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


    axios.get('http://localhost:3000/ChallanDetails')
        .then(response => response.data)
        .then(data => {
            data.forEach(item => {
                if (item.id == selectedRow) {
                    item.fullName = formData.fullName;
                    item.address = formData.address;
                    item.licenceNo = formData.licenseno;
                    item.vehicleCat = formData.vehicle;
                    item.vehicleNum = formData.vehicleno;
                    item.createdBy = formData.creater;
                    item.challanDate = formData.date;
                    item.guilty = formData.problem;
                    item.fineAmount = formData.amount;
                    return;
                }
            })
        })


}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("challanList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}