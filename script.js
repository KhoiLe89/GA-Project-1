// Create a sequence Array where the assigned values are
// the colors.
//When we need to animate, we send the array to the
//animate function
//We use the setInterval method to control the
//brightening of the colors.
//Step by step: Create a function that is a newround,
//then inside that function, we have an array of the sequence.
//Also in that function, is another function that is a for loop.
//that for loop causes the lightup and clear interval when it reachesthe
// end of the array.
// the light up function, adds a class of "lit" that lowers the opacity of the color.

var red = $(".red") //make all these to an object for practice//
var green = $(".green")
var yellow = $(".yellow")
var blue = $(".blue")

function newRound() {
  var sequence = [1, 2, 1]
  animate(sequence)
}
function animate(sequence){
  for (var i=0; i<sequence.length; i++) {
    var interval = setInterval(function(){
      lightUp(sequence[i]);
    }, 600);
  }
  if (i >= sequence.length){
    clearInterval(interval);}
  }

//the tile argument here is actually sequence[i].

function lightUp(tile){
  var $tile = $("#1").addClass("lit");
  window.setTimeout(function(){
    $tile.removeClass("lit")}, 300);
  }
  red.on("click", lightUp)
