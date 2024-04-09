// Function to validate the form inputs
function validateForm(){
    // Retrieve the values entered in the form fields
    var sId = document.getElementById("sId").value;
    var sName = document.getElementById("sName").value;
    var sPlace = document.getElementById("sPlace").value;
    var sCourse = document.getElementById("sCourse").value;

// Validate each field to ensure it is filled out
    if (sId == ""){
        alert("Student ID is required");
        return false;
    }
    if (sName == ""){
        alert("Student sName is required");
        return false;
    }
    
    if(sPlace == ""){
        alert("Student sPlace is required");
        return false;
    }
    if (sCourse == ""){
        alert("Student sCourse is required");
        return false;
    }

// Return true if all validations pass
    return true;
}

// Function to display the stored data on the page
function showData(){
    // Attempt to retrieve the list of people from local storage; initialize if not found
    var students;
    if(localStorage.getItem("students") == null){
        students = [];
    }
    else{
        students = JSON.parse(localStorage.getItem("students"));
    }

// Build HTML string containing data for all people
    var html = "";    
    students.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.sId + "</td>";
        html += "<td>" + element.sName + "</td>";
        html += "<td>" + element.sPlace + "</td>";
        html += "<td>" + element.sCourse + "</td>";
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
        
        var sId = document.getElementById("sId").value;
	    var sName = document.getElementById("sName").value;
	    var sPlace = document.getElementById("sPlace").value;
	    var sCourse = document.getElementById("sCourse").value;

// Attempt to retrieve or initialize the people list from local storage
        var students;
        if (localStorage.getItem("students") == null) {
            students = [];
        }
        else{
            students = JSON.parse(localStorage.getItem("students"));
        }    

// Add the new person to the list and save back to local storage
        students.push({
			sId : sId,
            sName : sName,
            sPlace: sPlace,
            sCourse: sCourse,
        });
        localStorage.setItem("students",JSON.stringify(students));

// Refresh the displayed data and clear form fields
        showData();
        document.getElementById("sId").value = "";
        document.getElementById("sName").value = "";
        document.getElementById("sPlace").value = "";
        document.getElementById("sCourse").value = "";
    }
}

// Function to edit an existing entry
function updateData(index){
    // Display the update button and hide the submit button
    document.getElementById("Submit").style.display= "none";
    document.getElementById("Update").style.display= "block";

// Retrieve the list of people from local storage
    var students;
    if (localStorage.getItem("students") == null) {
        students = [];
    }
    else{
        students = JSON.parse(localStorage.getItem("students"));
    }    

// Populate the form fields with the data of the person to be updated
    document.getElementById("sId").value = students[index].sId;
    document.getElementById("sName").value = students[index].sName;
    document.getElementById("sPlace").value = students[index].sPlace;
    document.getElementById("sCourse").value = students[index].sCourse;
    
// When the update button is clicked, save the updated data
    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            // Update the person's data in the list and save back to local storage
            students[index].sId = document.getElementById("sId").value;
            students[index].sName = document.getElementById("sName").value;
            students[index].sPlace = document.getElementById("sPlace").value;
            students[index].sCourse = document.getElementById("sCourse").value;

            localStorage.setItem("students",JSON.stringify(students));

            // Refresh the displayed data and clear form fields, revert buttons
            showData();
            
            document.getElementById("sId").value = "";
	        document.getElementById("sName").value = "";
	        document.getElementById("sPlace").value = "";
	        document.getElementById("sCourse").value = "";
	            
            document.getElementById("Submit").style.display= "block";
            document.getElementById("Update").style.display= "none";
        }
    }
}
