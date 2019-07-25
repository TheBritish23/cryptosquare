var cryptos = function(square){
  var grid = []
  //var square = "Thequickbrownfoxjumpedoverthelazydog"
  console.log(square);
  var len = Math.ceil(Math.sqrt(square.length));
  var letters = square.split("")
  for (x=0; x < square.length; x+=len) {
    console.log(x)
    var topush = letters.slice(x,x+len)
    grid.push(topush)
  }
  console.log(grid)
  var crypt = []
}

// user interface logic
$(document).ready(function() {
  $("form#cryptos").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var result = cryptos(words)
    $('#output').append()
    $("#result").text()
  })
 });
