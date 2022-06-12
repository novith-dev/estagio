























var modal = document.getElementById("Modal");



var span = document.getElementsByClassName("close")[0];

function Btn(){
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "scroll";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}