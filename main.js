// C0MM1NG_S00N}
const mobile_nav = document.getElementById("mobnavid");
const nav_header = document.getElementById("smallNav");
// console.log(mobile_nav);
// console.log(nav_header);
function toggleNavbar(){
    console.log(23)
    console.log("hello world");
    // alert("plz here");
    nav_header.classList.add("active");
    console.log(24);
}

function toggleNavbar2(){
    console.log(23)
    console.log("hello world");
    // alert("plz here");
    nav_header.classList.remove("active");
    console.log(24);
    
}

var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
