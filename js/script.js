var crypto = function(){
  var square = "The quick brown fox jumped over the lazy dog"
  console.log(square);
  var crypt = []
}

// user interface logic
$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var result = crypto()
  })
 });
