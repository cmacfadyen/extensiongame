$(document).ready(function() {
//play the question
  var audio = new Audio('Audio/cdquestion.mp3');
audio.loop=false;
audio.play();
});
//keep track of whether user got credit for an answer

$("#cd_answer").on("submit", function(){

  var ans = this.elements[0].value.toLowerCase();
 // only get points if a_credit hasn't already been set in scorekeeper
  if(ans=="aiff") {
    if(!sessionStorage.getItem("a_credit"))
      increaseScore("aiff");
    else
      window.alert("You already got credit for that answer")
      }

  else if(ans=="wav"){
  if(!sessionStorage.getItem("w_credit"))
    increaseScore("wav");

  else
    window.alert("You already got credit for that answer")
}

  else{
    displayWrong();
}
});
