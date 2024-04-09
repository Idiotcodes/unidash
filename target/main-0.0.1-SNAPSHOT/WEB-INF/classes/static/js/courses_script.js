// Function to validate the form inputs
function validateForm(){
    // Retrieve the values entered in the form fields
    var coId = document.getElementById("coId").value;
    var coName = document.getElementById("coName").value;
    var coFaculty = document.getElementById("coFaculty").value;
    var coCredits = document.getElementById("coCredits").value;

// Validate each field to ensure it is filled out
    if (coId == ""){
        alert("Income ID is required");
        return false;
    }
    if (coCredits.trim() === ""){
        alert("Course Credit is required");
        return false;
    } 
    else if (isNaN(coCredits) || Number(coCredits) <= 0) {
        alert("Please enter a Course Credit greater than 0");
        return false;
    }
    if(coFaculty == ""){
        alert("The Faculty of the course is required");
        return false;
    }
    if(coName == ""){
        alert("The Course Name is required");
        return false;
    }
    

// Return true if all validations pass
    return true;
}

// Function to display the stored data on the page
function showData(){
    // Attempt to retrieve the list of course from local storage; initialize if not found
    var course;
    if(localStorage.getItem("course") == null){
        course = [];
    }
    else{
        course = JSON.parse(localStorage.getItem("course"));
    }

// Build HTML string containing data for all course
    var html = "";    
    income.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.i_id + "</td>";
        html += "<td>" + element.amount + "</td>";
        html += "<td>" + element.place + "</td>";
        html += '<td><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html +="</tr>";
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Load data when the document is loaded
document.onload = showData();

// Function to add a new person to the storage and display
function AddData(){
    if(validateForm() == true){
        // Retrieve the form data
        
        var i_id = document.getElementById("i_id").value;
	    var amount = document.getElementById("amount").value;
	    var place = document.getElementById("place").value;

// Attempt to retrieve or initialize the people list from local storage
        var income;
        if (localStorage.getItem("income") == null) {
            income = [];
        }
        else{
            income = JSON.parse(localStorage.getItem("income"));
        }    

// Add the new person to the list and save back to local storage
        income.push({
			i_id : i_id,
            amount : amount,
            place: place,
        });
        localStorage.setItem("income",JSON.stringify(income));

// Refresh the displayed data and clear form fields
        showData();
        document.getElementById("coId").value = "";
        document.getElementById("coName").value = "";
        document.getElementById("coFaculty").value = "";
        document.getElementById("coCredits").value = "";
        
    }
}

// Function to edit an existing entry
function updateData(index){
    // Display the update button and hide the submit button
    document.getElementById("Submit").style.display= "none";
    document.getElementById("Update").style.display= "block";

// Retrieve the list of people from local storage
    var income;
    if (localStorage.getItem("income") == null) {
        income = [];
    }
    else{
        income = JSON.parse(localStorage.getItem("income"));
    }    

// Populate the form fields with the data of the person to be updated
    document.getElementById("i_id").value = income[index].i_id;
    document.getElementById("amount").value = income[index].amount;
    document.getElementById("place").value = income[index].place;
    
// When the update button is clicked, save the updated data
    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            // Update the person's data in the list and save back to local storage
            income[index].i_id = document.getElementById("i_id").value;
            income[index].amount = document.getElementById("amount").value;
            income[index].place = document.getElementById("place").value;

            localStorage.setItem("income",JSON.stringify(income));

            // Refresh the displayed data and clear form fields, revert buttons
            showData();
            
            document.getElementById("i_id").value = "";
	        document.getElementById("amount").value = "";
	        document.getElementById("place").value = "";
	            
            document.getElementById("Submit").style.display= "block";
            document.getElementById("Update").style.display= "none";
        }
    }
}
