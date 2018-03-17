function increaseScore(q){
  switch(q){
    case "wav":
      sessionStorage.setItem('w_credit',true);
      break;
      case "aiff":
      sessionStorage.setItem('a_credit',true);
      break;
      case "png":
      sessionStorage.setItem('png_credit',true);
      break;
      case "pdf":
      sessionStorage.setItem('pdf_credit',true);
      break;
      case "tel":
      sessionStorage.setItem('tel_credit',true);
      break;
      default:

  }
  if(sessionStorage.getItem('score')){
    sessionStorage.setItem('score',parseInt(sessionStorage.getItem('score'))+5);
  }
  else {
    sessionStorage.setItem('score',5);
  }
  var score = "You got points! Score is now " + sessionStorage.getItem('score');
 displayAlertMessage(score);

  //console.log(sessionStorage.getItem('score'));
}

function displayWrong(){
  window.alert("Sorry.  Try again!")
}

function displayAlertMessage(message) {
  alert(message);
}
  /*this is supposed to show a message box more eleganlty, but it's flaky
var timeOut = 5
$('#messageBox').text(message).fadeIn()
$('#messageBox').css("display", "block")
setTimeout(function() {
$('#messageBox').fadeOut()
$('#messageBox').css("display", "none")
}, timeOut * 1000);
}
*/
