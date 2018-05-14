$(document).ready(function(){
var random;
var fullname;
function getQuote(){
var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data){
  random = data.quoteText; 
  fullname= data.quoteAuthor;
    
//passing value to corresponding div
  $(".quote").hide().fadeIn(1000).html('"' + data.quoteText +'"');
  $(".author").hide().fadeIn(1000).html("- " + data.quoteAuthor); 
  random = data.quoteText;  
  fullname= data.quoteAuthor; 
 });
}
//using twitter click functionality  
  $('#tweet').on("click",function(){
  window.open("https://twitter.com/intent/tweet?text=" + random + "-" + fullname);
  });
  $("#btn").on("click",function(){
  getQuote();
  });
});