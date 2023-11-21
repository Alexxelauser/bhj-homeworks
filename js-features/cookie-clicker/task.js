const img = document.getElementById("cookie");
const cliker = document.getElementById("clicker__counter");
counter = 0;
img.addEventListener('click', function(){
  counter ++;
  cliker.textContent = + counter; 
})

window.onload = function(){
var i = 0;
 var img = document.getElementById("cookie");
  img.onclick = function(){
   if (i==0){
      this.style.width= '300px';
      i = 1;
   } else if (i==1){
      this.style.width= '200px';
      i = 0;
    }
  } 
};