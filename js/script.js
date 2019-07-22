var crypto = function(sentence){

// user interface logic
$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
