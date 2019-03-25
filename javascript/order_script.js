/***********************************************************************
 ** Author: Riley Kraft
 ** Date: 03/25/2019
 ** Description: This script consolidates all the user's input from the
 **		 order form into a payload to be sent to the website 
 **		 server as a json parcel.
 ***********************************************************************/

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById("urlPost").addEventListener("click", function(event){
		var req = new XMLHttpRequest();
		var url = "";
		var payload = {"first_name": null, "last_name":  null, "address": null, "city": null, "state": null, "zip": null,
				"phone": null, "email": null, "maple": null, "sapele": null, "walnut": null, "bubinga": null, 
				"purpleheart": null, "shape": null, "width": null, "height": null, "feet": null, "hand-holds": null, 
				"engraving": null, "details": null};
		payload.first_name = document.getElementById("first_name").value;
		payload.last_name = document.getElementById("last_name").value;
		payload.address = document.getElementById("address").value;
		payload.city = document.getElementById("city").value;
		payload.state = document.getElementById("state").value;
		payload.zip = document.getElementById("zip").value;
		payload.phone = document.getElementById("phone").value;
		payload.email = document.getElementById("email").value;
		payload.maple = document.getElementById("maple").value;
		payload.sapele = document.getElementById("sapele").value;
		payload.walnut = document.getElementById("walnut").value;
		payload.bubinga = document.getElementById("bubinga").value;
		payload.purpleheart = document.getElementById("purpleheart").value;
		payload.shape = document.getElementById("shape").value;
		payload.width = document.getElementById("width").value;
		payload.height = document.getElementById("height").value;
		payload.feet = document.getElementById("feet").value;
		payload.hand-holds = document.getElementById("hand-holds").value;
		payload.engraving = document.getElementById("engraving").value;
		payload.details = document.getElementById("details").value;
		
		/*
		req.open("POST", url, true);
		req.setRequestHeader("Content-Type", "application/json");
		req.send(JSON.stringify(payload));
		event.preventDefault();
		*/
	});
}
