var apikey = require('./../env').apikey;

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var userName = $('#userName').val();

    // console.log(userName);

    exports.getRepos = function(){
      $.get('https://api.github.com/users/daneden?access_token=' + apikey).then(function(response){
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    };
  });
});
