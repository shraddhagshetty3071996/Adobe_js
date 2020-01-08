function loadLogin() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("display-data").innerHTML =
        this.responseText;
        // $('#authDisplayArea').append();
      }
    };
    xhttp.open("GET", "login.html", true);
    xhttp.send();
  }
  function loadSignUp() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("display-data").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "signup.html", true);
    
    xhttp.send();
  }

  $(document).ready(function () {
    var xhttp = new XMLHttpRequest();
			
    xhttp.onreadystatechange = function() {  $('#login-btn').click(function(){
            
           $.ajax('login.html',   // request url
           {            
               success: function (data, status , xhr) {           
                $('#authDisplayArea').append(data);
               }
           });
        });
    
       };
       xhttp.open("GET", "signup.html", true);
    
    xhttp.send();

    });