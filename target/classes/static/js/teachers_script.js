// Function to validate the form inputs
function validateForm(){
    // Retrieve the values entered in the form fields
    var tId = document.getElementById("tId").value;
    var tName = document.getElementById("tName").value;
    var tPlace = document.getElementById("tPlace").value;
    var tFaculty = document.getElementById("tFaculty").value;

// Validate each field to ensure it is filled out
    if (tId == ""){
        alert("Teacher ID is required");
        return false;
    }
    if (tName == ""){
        alert("Teacher Name is required");
        return false;
    }
    
    if(tPlace == ""){
        alert("Teacher Place is required");
        return false;
    }
    if (tFaculty == ""){
        alert("Teacher Faculty is required");
        return false;
    }

// Return true if all validations pass
    return true;
}

// Function to display the stored data on the page
function showData(){
    // Attempt to retrieve the list of people from local storage; initialize if not found
    var teachers;
    if(localStorage.getItem("teachers") == null){
        teachers = [];
    }
    else{
        teachers = JSON.parse(localStorage.getItem("teachers"));
    }

// Build HTML string containing data for all people
    var html = "";    
    teachers.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.tId + "</td>";
        html += "<td>" + element.tName + "</td>";
        html += "<td>" + element.tPlace + "</td>";
        html += "<td>" + element.tFaculty + "</td>";
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
        
        var tId = document.getElementById("tId").value;
	    var tName = document.getElementById("tName").value;
	    var tPlace = document.getElementById("tPlace").value;
	    var tFaculty = document.getElementById("tFaculty").value;

// Attempt to retrieve or initialize the people list from local storage
        var teachers;
        if (localStorage.getItem("teachers") == null) {
            teachers = [];
        }
        else{
            teachers = JSON.parse(localStorage.getItem("teachers"));
        }    

// Add the new person to the list and save back to local storage
        teachers.push({
			tId : tId,
            tName : tName,
            tPlace: tPlace,
            tFaculty: tFaculty,
        });
        localStorage.setItem("teachers",JSON.stringify(teachers));

// Refresh the displayed data and clear form fields
        showData();
        document.getElementById("tId").value = "";
        document.getElementById("tName").value = "";
        document.getElementById("tPlace").value = "";
        document.getElementById("tFaculty").value = "";
    }
}

// Function to edit an existing entry
function updateData(index){
    // Display the update button and hide the submit button
    document.getElementById("Submit").style.display= "none";
    document.getElementById("Update").style.display= "block";

// Retrieve the list of people from local storage
    var teachers;
    if (localStorage.getItem("teachers") == null) {
        teachers = [];
    }
    else{
        teachers = JSON.parse(localStorage.getItem("teachers"));
    }    

// Populate the form fields with the data of the person to be updated
    document.getElementById("tId").value = teachers[index].tId;
    document.getElementById("tName").value = teachers[index].tName;
    document.getElementById("tPlace").value = teachers[index].tPlace;
    document.getElementById("tFaculty").value = teachers[index].tFaculty;
    
// When the update button is clicked, save the updated data
    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            // Update the person's data in the list and save back to local storage
            teachers[index].tId = document.getElementById("tId").value;
            teachers[index].tName = document.getElementById("tName").value;
            teachers[index].tPlace = document.getElementById("tPlace").value;
            teachers[index].tFaculty = document.getElementById("tFaculty").value;

            localStorage.setItem("teachers",JSON.stringify(teachers));

            // Refresh the displayed data and clear form fields, revert buttons
            showData();
            
            document.getElementById("tId").value = "";
	        document.getElementById("tName").value = "";
	        document.getElementById("tPlace").value = "";
	        document.getElementById("tFaculty").value = "";
	            
            document.getElementById("Submit").style.display= "block";
            document.getElementById("Update").style.display= "none";
        }
    }
}
