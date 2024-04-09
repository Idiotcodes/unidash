// Main function to validate form inputs


function validateForm(){
	// Retrieve form values using their respective IDs
	var name = document.getElementById("name").value;
	var date = document.getElementById("date").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("mobile").value;
	var gender = document.getElementById("gender").value;
	var nation = document.getElementById("nation").value;	
	var idtype = document.getElementById("idtype").value;
	var idnum = document.getElementById("idnum").value;
	var issue = document.getElementById("issue").value;
	var state = document.getElementById("state").value;
	var issuedate = document.getElementById("issuedate").value;
	var expiry = document.getElementById("expiry").value;

// Validate each input; if empty, show an alert and prevent form submission
	if (name == "")
	{
		alert("Name is required");
		return false;
	}
	
	if (date == "")
	{
		alert("Date of Birth is required");
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

	if(mobile == ""){
		alert("Mobile Number is required");
		return false;
	}

	if (gender == "")
	{
		alert("Gender is required");
		return false;
	}
	if (nation == "")
	{
		alert("Nationality is required");
		return false;
	}

	if (idtype == "")
	{
		alert("ID Type is required");
		return false;
	}
	
	if (idnum == "")
	{
		alert("ID Number is required");
		return false;
	}

	if (issue == "")
	{
		alert("Issuing Authority is required");
		return false;
	}

	if(state == ""){
		alert("Issuing State is required");
		return false;
	}

	if (issuedate == "")
	{
		alert("Issuing Date is required");
		return false;
	}
	if (expiry == "")
	{
		alert("Expiry Date is required");
		return false;
	}

	return true;// All validations passed
}


// Function to display stored data in table format
function showData(){
	var students1;
	if(localStorage.getItem("students1") == null){
		students1 = [];
	}
	else{
		students1 = JSON.parse(localStorage.getItem("students1"));
	}

	var html = "";

// Generate HTML for each person in the stored data
	students1.forEach(function (element, index){
		// Add data cells for each attribute
		html += "<tr>";
		html += "<td>" + element.name + "</td>";
		html += "<td>" + element.date + "</td>";
		html += "<td>" + element.email + "</td>";
		html += "<td>" + element.mobile + "</td>";
		html += "<td>" + element.gender + "</td>";
		html += "<td>" + element.nation + "</td>";
		html += "<td>" + element.idtype + "</td>";
		html += "<td>" + element.idnum + "</td>";
		html += "<td>" + element.issue + "</td>";
		html += "<td>" + element.state + "</td>";
		html += "<td>" + element.issuedate + "</td>";
		html += "<td>" + element.expiry + "</td>";
		html += '<td><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
		html +="</tr>";
	});
	document.querySelector("#crudTable tbody").innerHTML = html;
}

// Automatically load data when the document is loaded
document.onload = showData();

// Function to add a new data entry

function AddData(){
	if(validateForm() == true){
// Retrieve input values
		var name = document.getElementById("name").value;
		var date = document.getElementById("date").value;
		var email = document.getElementById("email").value;
		var mobile = document.getElementById("mobile").value;
		var gender = document.getElementById("gender").value;
		var nation = document.getElementById("nation").value;
		var idtype = document.getElementById("idtype").value;
		var idnum = document.getElementById("idnum").value;
		var issue = document.getElementById("issue").value;
		var state = document.getElementById("state").value;
		var issuedate = document.getElementById("issuedate").value;
		var expiry = document.getElementById("expiry").value;
// Initialize or get existing data
		var students1;
		if (localStorage.getItem("students1") == null) {
			students1 = [];
		}
		else{
			students1 = JSON.parse(localStorage.getItem("students1"));
		}	
// Add new person to the list
		students1.push({
			name : name,
			date: date,
			email: email,
			mobile: mobile,
			gender: gender,
			nation: nation,

			idtype : idtype,
			idnum: idnum,
			issue: issue,
			state: state,
			issuedate: issuedate,
			expiry: expiry,
		});
		localStorage.setItem("students1",JSON.stringify(students1));
		showData();
// Clear form fields after submission
		document.getElementById("name").value = "";
		document.getElementById("date").value = "";
		document.getElementById("email").value = "";
		document.getElementById("mobile").value = "";
		document.getElementById("gender").value = "";
		document.getElementById("nation").value = "";
		document.getElementById("idtype").value = "";
		document.getElementById("idnum").value = "";
		document.getElementById("issue").value = "";
		document.getElementById("state").value = "";
		document.getElementById("issuedate").value = "";
		document.getElementById("expiry").value = "";
	}
}
// Function to update data
function updateData(index){
	// show update button instead of submit button
	document.getElementById("Submit").style.display= "none";
	document.getElementById("Update").style.display= "block";
// Get existing data
	var students1;
		if (localStorage.getItem("students1") == null) {
			students1 = [];
		}
		else{
			students1 = JSON.parse(localStorage.getItem("students1"));
		}	
// Load the selected data into the form for editing
		document.getElementById("name").value = students1[index].name;
		document.getElementById("date").value = students1[index].date;
		document.getElementById("email").value = students1[index].email;
		document.getElementById("mobile").value = students1[index].mobile;
		document.getElementById("gender").value = students1[index].gender;
		document.getElementById("nation").value = students1[index].nation;
		document.getElementById("idtype").value = students1[index].idtype;
		document.getElementById("idnum").value = students1[index].idnum;
		document.getElementById("issue").value = students1[index].issue;
		document.getElementById("state").value = students1[index].state;
		document.getElementById("issuedate").value = students1[index].issuedate;
		document.getElementById("expiry").value = students1[index].expiry;
// Assign update functionality to the update button		
		document.querySelector("#Update").onclick = function(){
			if(validateForm() == true){
// Update the selected data with new form values
				students1[index].name = document.getElementById("name").value
				students1[index].date = document.getElementById("date").value
				students1[index].email = document.getElementById("email").value
				students1[index].mobile = document.getElementById("mobile").value
				students1[index].gender = document.getElementById("gender").value
				students1[index].nation = document.getElementById("nation").value
				students1[index].idtype =document.getElementById("idtype").value
				students1[index].idnum = document.getElementById("idnum").value
				students1[index].issue = document.getElementById("issue").value
				students1[index].state = document.getElementById("state").value
				students1[index].issuedate = document.getElementById("issuedate").value
				students1[index].expiry = document.getElementById("expiry").value


// Store updated list
				localStorage.setItem("students1",JSON.stringify(students1));
// Refresh displayed data
				showData();
// Reset form fields
				document.getElementById("name").value = "";
				document.getElementById("date").value = "";
				document.getElementById("email").value = "";
				document.getElementById("mobile").value = "";
				document.getElementById("gender").value = "";
				document.getElementById("nation").value = "";
				document.getElementById("idtype").value = "";
				document.getElementById("idnum").value = "";
				document.getElementById("issue").value = "";
				document.getElementById("state").value = "";
				document.getElementById("issuedate").value = "";
				document.getElementById("expiry").value = "";

// show submit button instead of update button
				document.getElementById("Submit").style.display= "block";
				document.getElementById("Update").style.display= "none";
			}
		}
}

