$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var userName = $('#userName').val();

    console.log(userName);
  });
});
