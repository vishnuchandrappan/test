$('#school').click(function(){
  $('#sca').slideToggle();
  $('#sce').slideToggle();
})
$('#book').click(function(){
  $('#boa').slideToggle();
  $('#boe').slideToggle();
})
$('.card').click(function(){
  $('#scform').slideToggle();
  $('#sclist').slideToggle();
  $('#card1').slideToggle();
  $('#card2').slideToggle();
})
$('#scname').focus(function(){
  $('#scname1').slideDown();
})
$('#scaddr').focus(function(){
  $('#scaddr1').slideDown();
})
$('#scphno').focus(function(){
  $('#scphno1').slideDown();
})
$('#scemail').focus(function(){
  $('#scemail1').slideDown();
})
$('#sca').click(function(){
  $('#scform').slideDown();
  $('#sclist').slideUp();
  $('#card2').slideDown();
  $('#card1').slideUp();
})
$('#sce').click(function(){
  
})
