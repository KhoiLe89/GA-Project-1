
var red = $("#red")
var green = $("#green")
var yellow = $("#yellow")
var blue = $("#blue")
var playButton = $("#playButton")
var resetButton = $("#resetButton")
var sequence = [1]
var click = [];

function newRound() {
  shuffle(sequence)
  animate(sequence);

  $("button").click(function(){
    click.push(parseInt($(this).val()))
    console.log('click:', click);
    console.log('sequence:', sequence);
    var numCorrect = 0
    for (let k = 0; k < click.length; k++) {
        if (click[k] === sequence[k]) {
           numCorrect++
           if(numCorrect === sequence.length) {

            console.log(sequence)
             sequence = randomNumber(sequence)
             console.log(sequence)
             clearClick();

            //  win();
            //  youWin();
// addNewRound();
//click needs to reset
            // setInterval($("body").toggleClass("bodyChange"), 300);
           }
        } else {
          lose();
          gameOver();
        }
    }
  });

}

function animate(sequence){
  for (let i=0; i<sequence.length; i++) {

    var interval = setTimeout(function(){
      lightUp(sequence[i]);
      console.log(sequence[i])

    }, 600 + (i*1000));

  }}


//this lights up the buttons but adding/removing classes

function lightUp(tile){
  var $tile = $("[data-tile='"+tile+"']").addClass("lit");
  window.setTimeout(function(){
    $tile.removeClass("lit")}, 1000);
  }
  playButton.on("click", newRound)
  resetButton.click(function(){
    location.reload();
  })
  // red.on("click", redSound)
// Score Keeper
    $(".fourButton").click(function(){
      $(".scoreBox").html(function(i, val){
        return +val+1
      })
    })

function shuffle(sequence){
  var currentPass = sequence.length;
  var index, temp;
  while (currentPass > 0){
    index = Math.floor(Math.random() * currentPass)
    currentPass--;
    temp =  sequence[currentPass];
    sequence[currentPass] = sequence[index];
    sequence[index] = temp;
  }
}



function redSound(){
var audio = new Audio('audio/button1.mp3');
audio.play()}


function blueSound(){
  var audio = new Audio('audio/button2.mp3');
  audio.play()}

function yellowSound(){
  var audio = new Audio('audio/button3.mp3');
  audio.play()}

function greenSound(){
  var audio = new Audio('audio/button4.mp3');
  audio.play()}
function gameOver(){
  var audio = new Audio('audio/gameOver.wav');
  audio.play()}
function youWin(){
  var audio = new Audio('audio/youWin.mp3');
  audio.play()}

red.on("click", redSound)
blue.on("click", blueSound)
yellow.on("click", yellowSound)
green.on("click", greenSound)


function lose(){
  var mainBoard = $(".mainBoard").addClass("lose");
  window.setInterval(function(){
    mainBoard.toggleClass("lose")}, 200);
  }

  function win(){

  var mainBoard = $(".mainBoard").addClass("win");
  window.setInterval(function(){
    mainBoard.toggleClass("win")}, 200);
  }

function randomNumber(array){

  var a1 = Math.floor((Math.random() * 4) + 1);

  array.push(a1)
  lightUp(a1)
  return array


}
function clearClick(){
  click=[]
}
function addNewRound(){
(sequence + randomNumber(a1))
}
