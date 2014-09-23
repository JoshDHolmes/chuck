$(document).ready(function(){
    $.getJSON( "http://api.icndb.com/jokes/random?escape=javascript", function( result ){
        $('#text h1').text(result.value.joke);
  });
});