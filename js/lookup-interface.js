var getRepos = require('./../js/lookup.js').getRepos;
var apikey = require('./../.env').apikey;
$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    var userName = $('#userName').val();
    getRepos = function(){
      $.get('https://api.github.com/users/'+ userName+'?access_token='+ apikey).then(function(response){
        console.log(response.avatar_url);
        $("div#asd").text(response.avatar_url);
      });
    };

getRepos();





});
});
