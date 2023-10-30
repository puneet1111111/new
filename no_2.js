
  function validateForm() {
    var x = document.forms["myForm"]["id"].value;
    var y = document.forms["myForm"]["pw"].value;
    if (x == "puneet" ) {
      window.location ="new.html"
  
      alert("Access SucessFully")
     
      return false;
    }
    
    else{ alert("Access Failed");
    }
  
  }