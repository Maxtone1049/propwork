var modal = document.getElementById("myModal");
var btt =document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var hide = document.getElementById("sidebar");
btt.onclick  = function(){
  modal.style.display= "block";
  hide.style.display= "none";
}

span.onclick = function(){
  modal.style.display = "none";
  hide.style.display= "block";
}
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display= "none";
  }
}

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
  window.onclick = function(event){
      if (!event.target.matches('.img-compress')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i=0;i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
}
  }

