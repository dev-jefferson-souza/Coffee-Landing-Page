//When the user scrolls the page, execute the function
window.onscroll = function(){
  headerStickyFunction()
};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function headerStickyFunction(){
  if (window.pageYOffset > sticky) {
     header.classList.add("sticky")
  }
  else{
  header.classList.remove("sticky")
  }
}