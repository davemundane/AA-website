function submitForm(){

	var eReq = new XMLHttpRequest();
	var url = "https://ofsrbuhnod.execute-api.us-east-1.amazonaws.com/prod/webToSNS";
	var nameContents = document.getElementById("nameField")
	var emailContents = document.getElementById("emailField")
	var subjectContents = document.getElementById("subjectField")
	var messageContents = document.getElementById("messageField")
	var message = JSON.stringify({"name": nameContents.value, "email": emailContents.value, "subject": subjectContents.value, "message": messageContents.value})
	eReq.open("POST", url);
	eReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
	eReq.send(message)

	
	document.getElementById("emailMessage").innerHTML = "<span>Thanks for your message, I'll get back to you as soon as possible</span>";
	setTimeout(function(){
		document.getElementById("emailMessage").innerHTML = "";
	},3000);
	
	document.getElementById("main-contact-form").reset();
	document.getElementById("main-contact-form").focus();
	return false
	}
