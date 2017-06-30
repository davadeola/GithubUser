(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apikey  = "c38027e96a49f7fe98382c72e1ff998df7fc7440";

},{}],2:[function(require,module,exports){
var apikey = require('./../.env').apikey;

  // console.log(apikey);
  // exports.getRepos = function(){
  //   $.get('https://api.github.com/users/davadeola?access_token='+ apikey).then(function(response){
  //     console.log(response);
  //   });
  // };

  // .fail(function(error){
  //   console.log(error.responseJSON.message);
  // });

},{"./../.env":1}],3:[function(require,module,exports){
var getRepos = require('./../js/lookup.js').getRepos;
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
          <h2>Repositories</h2>
          </div>`

      );
    });

    };
    getRepos();
});
  });

},{"./../.env":1,"./../js/lookup.js":2}]},{},[3]);
