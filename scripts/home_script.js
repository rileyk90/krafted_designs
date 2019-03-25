/****************************************************************************
 * Author: Riley Kraft
 * Date: 03/04/2018
 * Description: This script enables the photo carousel on the home page to
 * 				operate automatically on a timed loop.
 * Resources:
 * 		Source code for automatically changing pictures on a timed loop
 * 			https://www.w3schools.com/w3css/w3css_slideshow.asp
 * 			https://codepen.io/danielguillan/pen/duiAq
 * 			https://www.w3schools.com/howto/howto_js_slideshow.asp
 ***************************************************************************/

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("carousel");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 6000); // Change image every 6 seconds
}
