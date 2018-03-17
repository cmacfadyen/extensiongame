$(document).ready(function() {
  var i=0
  var newMess;
  var messages =["Look around", "It's hard to see...","But the information you need is here..."];

//figure out how to loop this...
    newMess = window.setInterval(function(){
      if(i>=messages.length){
        clearInterval(newMess);
        window.location.href="desk.html";
      }
  //  $('#show-mess').fadeOut();
    $("#show-mess").text(messages[i]);
//    $("#show-mess").fadeIn("");
    i++;
  }, 2000);

/*
    window.setTimeout(function(){
      $('#show-mess').fadeOut();
    $("#show-mess").text(messages[2]);
    $("#show-mess").fadeIn();
    }, 2000);

    window.setTimeout(function(){
      $('#show-mess').fadeOut();
     window.location.href="desk.html";
   }, 2000);
*/



});
/*
$('.rect').on('click',(function(){
 if(message==0){
  $('#intro').fadeOut("slow",function(){
    $('#intro2').fadeIn("slow");
    message++;
});

}
else if(message==1){
  $('#intro2').fadeOut("slow",function(){
    $('#intro3').fadeIn("slow");
    message++;
});
}
else{
  $('#intro3').fadeOut("slow",function(){
  window.location.href="desk.html";
});
}
}));
*/
