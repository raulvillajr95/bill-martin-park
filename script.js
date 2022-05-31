const rentalCall = document.getElementById('rental-call');
const rulesCall = document.getElementById('rules-call');

rentalCall.addEventListener('click', function() {
  window.open('tel:19093496900');
})
rulesCall.addEventListener('click', function() {
  window.open('tel:19093496900');
})

function hamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}