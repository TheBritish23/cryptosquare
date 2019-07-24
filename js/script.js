var cryptos = function(){
  var square = "Thequickbrownfoxjumpedoverthelazydog"
  console.log(square);
  var len = Math.ceil(Math.sqrt(words.length));
  var letters = square.split("")
  for (x=0; x < square.length; x+=len) {
    console.log(x)
    var topush = letters.slice(x,x+len)
    console.log(topush)
  }
  var crypt = []
}

// user interface logic
$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var result = cryptos()
    $('#output').append()
    $("#result").text()
  })
 });
