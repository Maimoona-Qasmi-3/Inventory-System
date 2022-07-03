document.querySelector("#show-login").addEventListener("click", function() {
  document.querySelector(".pop-up").classList.add("active");
});
document.querySelector(".pop-up .close-button").addEventListener("click", function() {
  document.querySelector(".pop-up").classList.remove("active");
});
function validate(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  if (email==="admin@gmail.com" && password==="2468") {
    return false;
  }else {
    alert("The information you have filled in is incorrect")
  }
}
