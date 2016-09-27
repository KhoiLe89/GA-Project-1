// NHO: Overall, great job making a complex, functional game after only two weeks!
// Some ideas for future development: come up with a way of organizing your code and stick with it.
// One idea is to refactor into a global object, or to have your code organized
// procedurally -> I like to start with my variable declarations first, then any helper functions,
// then the key app function defintions, then my listeners. Ultimately is not important which pattern
// you pick, just will help you and future you read and mantain code!

var red = $("#red")
var green = $("#green")
var yellow = $("#yellow")
var blue = $("#blue")
var playButton = $("#playButton")
var resetButton = $("#resetButton")
var sequence = [1] // how could this be dynamic?
var click = [];

function newRound() {
  shuffle(sequence)
  animate(sequence);

  $("button").click(function() {
    click.push(parseInt($(this).val()))
    // NHO: Would remove your console.log statements when you deploy
    var numCorrect = 0
    for (let k = 0; k < click.length; k++) {
      // NHO: feel like here are some good spots for code comments
      if (click[k] === sequence[k]) {
        numCorrect++
        if (numCorrect === sequence.length) {
          sequence = randomNumber(sequence)
          clearClick();
          // NHO: In general, would recommend leaving commented code out of master
        }
      } else {
        lose();
        gameOver();
      }
    }
  });
}

function animate(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    var interval = setTimeout(function() {
      lightUp(sequence[i]);
    }, 600 + (i * 1000));
  }
}


//this lights up the buttons but adding/removing classes
function lightUp(tile) {
  var $tile = $("[data-tile='" + tile + "']").addClass("lit");
  window.setTimeout(function() {
    $tile.removeClass("lit")
  }, 1000);
}
playButton.on("click", newRound)

// NHO: how could you reset the game's state without reloading the page?
// What types of values / elements would have to be reset?
resetButton.click(function() {
  location.reload();
})

  // Score Keeper
$(".fourButton").click(function() {
  $(".scoreBox").html(function(i, val) {
    return +val + 1
  })
})

function shuffle(sequence) {
  var currentPass = sequence.length;
  var index, temp;
  while (currentPass > 0) {
    index = Math.floor(Math.random() * currentPass)
    currentPass--;
    temp = sequence[currentPass];
    sequence[currentPass] = sequence[index];
    sequence[index] = temp;
  }
}



//  NHO: these functions all seem to do very similar things, is there a way to abstract these?
// Maybe by passing in a button....?
function redSound() {
  var audio = new Audio('audio/button1.mp3');
  audio.play()
}


function blueSound() {
  var audio = new Audio('audio/button2.mp3');
  audio.play()
}

function yellowSound() {
  var audio = new Audio('audio/button3.mp3');
  audio.play()
}

function greenSound() {
  var audio = new Audio('audio/button4.mp3');
  audio.play()
}

function gameOver() {
  var audio = new Audio('audio/gameOver.wav');
  audio.play()
}

function youWin() {
  var audio = new Audio('audio/youWin.mp3');
  audio.play()
}

red.on("click", redSound)
blue.on("click", blueSound)
yellow.on("click", yellowSound)
green.on("click", greenSound)


function lose() {
  var mainBoard = $(".mainBoard").addClass("lose");
  window.setInterval(function() {
    mainBoard.toggleClass("lose")
  }, 200);
}

function win() {
  var mainBoard = $(".mainBoard").addClass("win");
  window.setInterval(function() {
    mainBoard.toggleClass("win")
  }, 200);
}

function randomNumber(array) {
  var a1 = Math.floor((Math.random() * 4) + 1);
  array.push(a1)
  lightUp(a1)
  return array
}

function clearClick() {
  click = []
}

// NHO: In general, I would try to get in the habbit of writing pure functions,
// that is avoid functions that mutate vars outside of their scope.
// How could you refactor this to make a pure function?
function addNewRound() {
  (sequence + randomNumber(a1))
}
