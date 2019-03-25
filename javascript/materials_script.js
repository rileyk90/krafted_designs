/***************************************************************************
 * Author: Riley Kraft
 * Date: 03/04/2018
 * Description: This script enables the dropdown buttons in the 
 * 				material's sidenav, as well as loads the linked html 
 * 				pages into an iframe scroll-box.
 * Resources:
 * 		Source code for dropdown button javascript
 * 			https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp
 **************************************************************************/

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function load(page) {
    document.getElementById("scroll-box").innerHTML='<iframe type="text/html" src='+page+'></iframe>';
}