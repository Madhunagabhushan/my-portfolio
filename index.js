var typed=new Typed(".text",{
  strings:["Frontend Developer","Engineering Student","Programmer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});
var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabName) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
var menu=document.getElementById("menu");
function openmenu(){
  menu.style.right="0";
}
function closemenu(){
  menu.style.right="-200px";
}