$(document).ready(function() {

$('#keyboard-upper-container').hide();

$('body').keydown(function(e) {
    // $('#keyboard-upper-container').show();
    if (event.shiftkey) {
    alert('shift key was pressed');
    };
});

  
  
  
  
  
  
  
    //end of body
})