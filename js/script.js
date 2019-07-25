var cryptos = function(square){
  var grid = []
  //var square = "Thequickbrownfoxjumpedoverthelazydog"
  console.log(square);
  var letters = square.replace(/[\s\W]/g, "").split("")
  var len = Math.ceil(Math.sqrt(letters.length));
  for (x=0; x < square.length; x+=len) {
    console.log(x)
    var topush = letters.slice(x,x+len)
    grid.push(topush)
  }
  for (x = 0; x < 3; x++) {
    for (y = 0; y < 3; y++) {
      console.log(grid[y][x])
    }
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
