
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "welcome" ) {
    window.location ="index_imf.html"

    alert("Access SucessFully")
   
    return false;
  }
  
  else{ alert("Access Failed");
  }

}