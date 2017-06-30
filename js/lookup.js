var apikey = require('./../.env').apikey;

function getmyRepos(userName) {
  $.get('https://api.github.com/users/'+userName+'/repos?access_token='+ apikey).then(function(responses){
    console.log(responses);
    responses.forEach(function (repo) {
      $("ul.repos").append("<li><a href="+repo.html_url+">"+repo.name+"</a></li>");
    });
});
}

exports.getmyReposModule = getmyRepos;
