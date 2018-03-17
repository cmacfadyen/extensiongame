$(window).on( "load", function(){


    if(!sessionStorage.getItem("tel_credit"))
      increaseScore("tel");
    else
      window.alert("You already got credit for this page")
    
    });
