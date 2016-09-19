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

var red = $("#red") //make all these to an object for practice//
var green = $("#green")
var yellow = $("#yellow")
var blue = $("#blue")
var playButton = $("#playButton")

function newRound() {
  var sequence = [1, 2, 1]
  animate(sequence);
  var click = [];
  $("button").click(function(){
    click.push(parseInt($(this).val()))
    console.log('click:', click);
    console.log('sequence:', sequence);
    var numCorrect = 0
    for (let k = 0; k < click.length; k++) {
        if (click[k] === sequence[k]) {
           numCorrect++
           if(numCorrect === sequence.length) {
             alert("Game over, you win!")

            // setInterval($("body").toggleClass("bodyChange"), 300);
           }
        } else {
          alert("Game over you lose");
        }
    }
  });

// function checkIfIsSequence(click, sequence) {
//
// }



// compare(sequence, click)

}

function animate(sequence){
  for (let i=0; i<sequence.length; i++) {

    var interval = setTimeout(function(){
      lightUp(sequence[i]);
      console.log(sequence[i])

    }, 600 + (i*1000));

  }}


//the tile argument here is actually sequence[i].

function lightUp(tile){
  var $tile = $("[data-tile='"+tile+"']").addClass("lit");
  window.setTimeout(function(){
    $tile.removeClass("lit")}, 1000);
  }
  playButton.on("click", newRound)
// $("button").click(function(){
//   var userClick = $("button").val();
//   var userClickInput = userClick.value
//   console.log(userClickInput);
// });
// var click = [];
// $("button").click(function(){
//   click.push($(this).val());
// });
