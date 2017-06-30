(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apikey  = "b15fcc3dd25a827aff332dcee8b4cb2035ba4869";

},{}],2:[function(require,module,exports){
var apikey = require('./../.env').apikey;

function getmyRepos(userName) {
  $.get('https://api.github.com/users/'+userName+'/repos?access_token='+ apikey).then(function(responses){

    responses.forEach(function (repo) {
      $("ul.repos").append("<li><a href="+repo.html_url+">"+repo.name+"</a></li>");
    });
});
}

exports.getmyReposModule = getmyRepos;

},{"./../.env":1}],3:[function(require,module,exports){
var getmyRepos = require('./../js/lookup.js').getmyReposModule;
var apikey = require('./../.env').apikey;
$(document).ready(function(){

  $('form').submit(function(event){
    event.preventDefault();
    $("div#asd").text(" ");
    var userName = $('#userName').val();
    getRepos = function(){
      $.get('https://api.github.com/users/'+ userName+'?access_token='+ apikey).then(function(response){
        console.log(response.login);
        $("div#asd").append(
          `<div class="col-md-4">
          <div class="profile-pic">
          <img src="`+ response.avatar_url+`" alt="">
          </div>
          </div>

          <div class="col-md-8">
          <h1>`+response.login+`</h1>
          <a href="`+response.html_url+`">Github Account</a>
          <p>`+response.login+` has `+response.public_repos+` repositories.</p>
          <div>

          <h2>Repositories</h2>
          <ul class="repos"></ul>
          </div>
          </div>`

        );
        getmyRepos(userName);
      });

    };
    getRepos();
  });
});

},{"./../.env":1,"./../js/lookup.js":2}]},{},[3]);
