game = false;
palyerTurn = false;
level = 0;
moves = [];
counter = 0;

$(document).keypress(function (event){
  if(game == false){
    turnGameOn();
  }
});

function turnGameOn(){
  game = true;
  level = 1;
  $("h2").text("Level " + level);
  $("h1").text("Let's gooo");
  computerPlay();
}



function computerPlay(){
  
    move = addMove();
    play(move);
    $("h1").text("Choose carefully")
    palyerTurn = true;
}

$(".red").click(function () {
  if (palyerTurn) {
    checkMove(1);
  }
  if(game == false){
    turnGameOn();
  }
});
$(".green").click(function () {
  if (palyerTurn) {
    checkMove(2);
  }
  if(game == false){
    turnGameOn();
  }
});
$(".yellow").click(function () {
  if (palyerTurn) {
    checkMove(3);
  }
  if(game == false){
    turnGameOn();
  }
});

$(".blue").click(function () {
  if (palyerTurn) {
    checkMove(4);
  }
  if(game == false){
    turnGameOn();
  }
});

function checkMove(code){
  
  if(code == moves[counter]){
    play(code);
    counter++;
    if(counter == moves.length){
      counter = 0;
      palyerTurn = false;
      level++;
      $("h2").text("Level " + level);
      setTimeout(function(){computerPlay();},1000)
      
    }
  }else{
    audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("wrong");
    setTimeout(function(){
      $("body").removeClass("wrong");
      game = false;
      palyerTurn = false;
      level = 0;
      moves = [];
      counter = 0;  
      $("h1").text("Press any key to start");  
    },1000);
   
    
  }
  


}
function addMove() {
  move =  Math.floor(Math.random() * 4) + 1
  moves.push(move);
  return move;
}
function play(code) {
  switch (code) {
    case 1:
      $(".red").addClass("pressed");
      audio = new Audio("sounds/red.mp3");
      audio.play();
      setTimeout(function () {
        $(".red").removeClass("pressed");
      }, 1000);
      break;
    case 2:
      $(".green").addClass("pressed");
      audio = new Audio("sounds/green.mp3");
      audio.play();
      setTimeout(function () {
        $(".green").removeClass("pressed");
      }, 1000);
      break;
    case 4:
      $(".blue").addClass("pressed");
      audio = new Audio("sounds/blue.mp3");
      audio.play();
      setTimeout(function () {
        $(".blue").removeClass("pressed");
      }, 1000);
      break;
    case 3:
      $(".yellow").addClass("pressed");
      audio = new Audio("sounds/yellow.mp3");
      audio.play();
      setTimeout(function () {
        $(".yellow").removeClass("pressed");
      }, 1000);
      break;
    
  }
}
