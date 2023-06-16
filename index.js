/*/For Responsive Menu Bar
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

let togglemenu = () =>{
  if(menuList.style.maxHeight == "0px"){
    
    menuList.style.maxHeight = "130px";
  }
  else{
    menuList.style.maxHeight = "0px";

  }
}
*/


// Function for scrolling to top of the page

let mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }