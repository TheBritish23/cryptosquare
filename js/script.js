var cryptos = function(square){
  var cryptoSquare = []
  var tempString = []
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
  for (x = 0; x < len; x++) {
    for (y = 0; y < len; y++) {
      tempString.push(grid[y][x])
    }
    cryptoSquare.push(tempString.join(""));
    tempString=[];
  }
  console.log(cryptoSquare.join(" "))
  $('#output').append(cryptoSquare.join(" "))
  var crypt = []
}

// user interface logic
$(document).ready(function() {
  $("form#cryptos").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var result = cryptos(words)
    $("#result").text()
  })
 });
