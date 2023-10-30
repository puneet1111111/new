
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "puneet" ) {
      window.location ="new.html"
  
      alert("Access SucessFully")
     
      return false;
    }
    
    else{ alert("Access Failed");
    }
  
  }