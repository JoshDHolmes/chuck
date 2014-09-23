$(document).ready(function(){
    $.getJSON( "http://api.icndb.com/jokes/random?escape=javascript", function( result ){
        $('#text h1').text(result.value.joke);
  });
});

//This script relies on APIs from The Internet Chuck Norris Database (http://www.icndb.com/api/).