$("#comp_answer").on("submit", function(){


 // only get points if a_credit hasn't already been set in scorekeeper

 if($('#png').is(':checked')){

  if(!sessionStorage.getItem("png_credit"))
    increaseScore("png");
  else
    window.alert("You already got credit for that answer")
}

  else{
    displayWrong();
}
});
