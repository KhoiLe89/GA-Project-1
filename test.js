
// NHO: is this file being used? If not, might want to delete it...
function newRound() {
  var sequence = [1, 2, 2]
  animate(sequence)
}
function animate(sequence){
  for (var i = 0; i<sequence.length; i++){
    var interval = setInterval(function(){
      lightUp(sequence[i]);
    }, 600);
    })
  }
  if (i > sequence.length){
    clearInterval(interval);}
  }
   function lightUp(tile){
     var $tile = $(".data-tile 1")
   }
