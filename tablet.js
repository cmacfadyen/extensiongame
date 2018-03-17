$("#pdf_answer").on("submit", function(){

  var ans = this.elements[0].value.toLowerCase();
 // only get points if a_credit hasn't already been set in scorekeeper
  if(ans=="portable document format") {
    if(!sessionStorage.getItem("pdf_credit"))
      increaseScore("pdf");
    else
      window.alert("You already got credit for that answer")
      }
      else
      displayWrong();
    });
