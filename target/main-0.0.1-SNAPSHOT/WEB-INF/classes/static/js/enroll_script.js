// Function to validate the form inputs
function validateForm(){
    // Retrieve the values entered in the form fields
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;

// Validate each field to ensure it is filled out
    if (name == ""){
        alert("Name is required");
        return false;
    }
    
    if (age == ""){
        alert("Age is required");
        return false;
    }
    else if(age < 1){
        alert("Age must be greater than zero");
        return false;
    }

    if(address == ""){
        alert("Address is required");
        return false;
    }

    if(email == ""){
        alert("Email is required");
        return false;
    }
    else if(!email.includes("@") || !email.includes(".")){
		alert("Please enter Email in 'abc@gmail.com' format.");
		return false;
    }
    if (course == ""){
        alert("course is required");
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
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.course + "</td>";
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
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;
        var course = document.getElementById("course").value;

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
            name : name,
            age: age,
            address: address,
            email: email,
            course: course,
        });
        localStorage.setItem("students",JSON.stringify(students));

// Refresh the displayed data and clear form fields
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
        document.getElementById("course").value = "";
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
    document.getElementById("name").value = students[index].name;
    document.getElementById("age").value = students[index].age;
    document.getElementById("address").value = students[index].address;
    document.getElementById("email").value = students[index].email;
    document.getElementById("course").value = students[index].course;
    
// When the update button is clicked, save the updated data
    document.querySelector("#Update").onclick = function(){
        if(validateForm() == true){
            // Update the person's data in the list and save back to local storage
            students[index].name = document.getElementById("name").value;
            students[index].age = document.getElementById("age").value;
            students[index].address = document.getElementById("address").value;
            students[index].email = document.getElementById("email").value;
            students[index].course = document.getElementById("course").value;

            localStorage.setItem("students",JSON.stringify(students));

            // Refresh the displayed data and clear form fields, revert buttons
            showData();
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("email").value = "";
            document.getElementById("course").value = "";
            document.getElementById("Submit").style.display= "block";
            document.getElementById("Update").style.display= "none";
        }
    }
}
