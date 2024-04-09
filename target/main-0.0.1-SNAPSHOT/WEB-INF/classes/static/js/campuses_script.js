// Function to validate the form inputs
function validateForm(){
    // Retrieve the values entered in the form fields
    var cId = document.getElementById("cId").value;
    var cName = document.getElementById("cName").value;
    var cPlace = document.getElementById("cPlace").value;
    var cFaculty = document.getElementById("cFaculty").value;
    var cCapacity = document.getElementById("cCapacity").value;
   

// Validate each field to ensure it is filled out
    if (cId == ""){
        alert("Campus ID is required");
        return false;
    }
    if (cName == ""){
        alert("Campus Name is required");
        return false;
    }
    
    if(cPlace == ""){
        alert("Campus Location is required");
        return false;
    }
    if (cFaculty == ""){
        alert("Campus Faculty is required");
        return false;
    }
    if (cCapacity.trim() === ""){ // Checking if the campus cCapacity is empty
        alert("Campus Capacity is required");
        return false;
    } else if (isNaN(cCapacity) || Number(cCapacity) <= 0 || !Number.isInteger(Number(cCapacity))) { 
        // Additional checks to ensure cCapacity is a positive integer
        alert("Please enter a valid positive integer for campus cCapacity.");
        return false;
    }

// Return true if all validations pass
    return true;
}

// Function to display the stored data on the page
function showData(){
    // Attempt to retrieve the list of people from local storage; initialize if not found
    var campuses;
    if(localStorage.getItem("campuses") == null){
        campuses = [];
    }
    else{
        campuses = JSON.parse(localStorage.getItem("campuses"));
    }

// Build HTML string containing data for all people
    var html = "";    
    campuses.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.cId + "</td>";
        html += "<td>" + element.cName + "</td>";
        html += "<td>" + element.cPlace + "</td>";
        html += "<td>" + element.cFaculty + "</td>";
        html += "<td>" + element.cCapacity + "</td>";
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
        
        var cId = document.getElementById("cId").value;
	    var cName = document.getElementById("cName").value;
	    var cPlace = document.getElementById("cPlace").value;
	    var cFaculty = document.getElementById("cFaculty").value;
	    var cCapacity = document.getElementById("cCapacity").value;

// Attempt to retrieve or initialize the people list from local storage
        var campuses;
        if (localStorage.getItem("campuses") == null) {
            campuses = [];
        }
        else{
            campuses = JSON.parse(localStorage.getItem("campuses"));
        }    

// Add the new person to the list and save back to local storage
        campuses.push({
			cId : cId,
            cName : cName,
            cPlace: cPlace,
            cFaculty: cFaculty,
            cCapacity: cCapacity,
        });
        localStorage.setItem("campuses",JSON.stringify(campuses));

// Refresh the displayed data and clear form fields
        showData();
        document.getElementById("cId").value = "";
        document.getElementById("cName").value = "";
        document.getElementById("cPlace").value = "";
        document.getElementById("cFaculty").value = "";
        document.getElementById("cCapacity").value = "";
    }
}

// Function to edit an existing entry
function updateData(index){
    // Display the update button and hide the submit button
    document.getElementById("Submit").style.display= "none";
    document.getElementById("Update").style.display= "block";

// Retrieve the list of people from local storage
    var campuses;
    if (localStorage.getItem("campuses") == null) {
        campuses = [];
    }
    else{
        campuses = JSON.parse(localStorage.getItem("campuses"));
    }    

// Populate the form fields with the data of the person to be updated
    document.getElementById("cId").value = campuses[index].cId;
    document.getElementById("cName").value = campuses[index].cName;
    document.getElementById("cPlace").value = campuses[index].cPlace;
    document.getElementById("cFaculty").value = campuses[index].cFaculty;
    document.getElementById("cCapacity").value = campuses[index].cCapacity;
    
// When the update button is clicked, save the updated data
    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            // Update the person's data in the list and save back to local storage
            campuses[index].cId = document.getElementById("cId").value;
            campuses[index].cName = document.getElementById("cName").value;
            campuses[index].cPlace = document.getElementById("cPlace").value;
            campuses[index].cFaculty = document.getElementById("cFaculty").value;
            campuses[index].cCapacity = document.getElementById("cCapacity").value;

            localStorage.setItem("campuses",JSON.stringify(campuses));

            // Refresh the displayed data and clear form fields, revert buttons
            showData();
            
            document.getElementById("cId").value = "";
	        document.getElementById("cName").value = "";
	        document.getElementById("cPlace").value = "";
	        document.getElementById("cFaculty").value = "";
	        document.getElementById("cCapacity").value= "";
	            
            document.getElementById("Submit").style.display= "block";
            document.getElementById("Update").style.display= "none";
        }
    }
}
