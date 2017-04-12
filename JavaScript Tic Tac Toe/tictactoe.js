var person;
var aiPlayer;
var currPlayer = person;
var moves = 0;
var gameOver= false;
var pos = false;


$(".tile").on('click', taken);
$(".choose").on('click', setPos);

function setPos(){
  if($(this).attr("id") === "x" && !pos){
    person = "x";
    aiPlayer = "o";
    pos = true;
  } else if($(this).attr("id") === "o" && !pos){
    person ="o";
    aiPlayer ="x";
    pos =true;
  }
  currPlayer = person;

  $('.person').removeClass('X');
  $('.person').removeClass('O');
  $('.aiPlayer').removeClass('O');
  $('.aiPlayer').removeClass('X');
  $('.person').addClass(person);
  $('.aiPlayer').addClass(aiPlayer);
}

function takeTurns(player){
  player === person ? currPlayer = aiPlayer : currPlayer = person;
};

function tiegameOver(){
 if(moves===9){
   setTimeout(reset, 1000);
 }
};

function checkWin(){
  switch(true){
    case $("#s0").text() === currPlayer && $("#s1").text() === currPlayer && $("#s2").text() === currPlayer:
    mark("#s0", "#s1", "#s2");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    case $("#s3").text() === currPlayer && $("#s4").text() === currPlayer && $("#s5").text() === currPlayer:
    mark("#s3", "#s4", "#s5");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    case $("#s6").text() === currPlayer && $("#s7").text() === currPlayer && $("#s8").text() === currPlayer:
    mark("#s6", "#s7", "#s8");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    case $("#s0").text() === currPlayer && $("#s3").text() === currPlayer && $("#s6").text() === currPlayer:
    mark("#s0", "#s3", "#s6");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    case $("#s1").text() === currPlayer && $("#s4").text() === currPlayer && $("#s7").text() === currPlayer:
    mark("#s1", "#s4", "#s7");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    case $("#s2").text() === currPlayer && $("#s5").text() === currPlayer && $("#s8").text() === currPlayer:
    mark("#s2", "#s5", "#s8");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    case $("#s0").text() === currPlayer && $("#s4").text() === currPlayer && $("#s8").text() === currPlayer:
    mark("#s0", "#s4", "#s8");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    case $("#s2").text() === currPlayer && $("#s4").text() === currPlayer && $("#s6").text() === currPlayer:
    mark("#s2", "#s4", "#s6");
    gameOver = true;
    setTimeout(updateScore, 1000);
    break;
    default: tiegameOver();
  }
};

function mark(line1, line2, line3){
  var $line1 = $(line1);
  var $line2 = $(line2);
  var $line3 = $(line3);
  $line1.addClass("winner");
  $line2.addClass("winner");
  $line3.addClass("winner");
  takeTurns(currPlayer);
}

function updateScore(){
  $('.' + currPlayer).text(+$('.' + currPlayer).text() + 1);
  reset();
}

function reset(){
  $(".tile").empty();
  $(".tile").removeClass('clicked');
  $("div").removeClass("winner");
  moves = 0;
  gameOver = false;
  setPos();
};

function drawPos(id){
  $('#' + id).html('<p class="drawPos">'+currPlayer+'</p>');
};

function taken(){
  pos = true;
  var id = $(this).attr('id');
  if(!$('#' + id).hasClass('clicked')){
    $('#' + id).addClass('clicked');
    drawPos(id);
    checkWin();
    moves = 0;
    takeTurns(currPlayer);
    if(gameOver === false && moves % 2 === 0){
      aiTurn();
      checkWin();
      moves = 0;
      takeTurns(currPlayer);
    }
  }
};


function aiTurn(){
  switch(true){
    case $("#s0").text() !== person && $("#s0").text() !== aiPlayer:
    drawPos("s0");
    break;
    case $("#s1").text() !== person && $("#s1").text() !== aiPlayer:
    drawPos("s1");
    break;
    case $("#s2").text() !== person && $("#s2").text() !== aiPlayer:
    drawPos("s2");
    break;
    case $("#s3").text() !== person && $("#s3").text() !== aiPlayer:
    drawPos("s3");
    break;
    case $("#s4").text() !== person && $("#s4").text() !== aiPlayer:
    drawPos("s4");
    break;
    case $("#s5").text() !== person && $("#s5").text() !== aiPlayer:
    drawPos("s5");
    break;
    case $("#s6").text() !== person && $("#s6").text() !== aiPlayer:
    drawPos("s6");
    break;
    case $("#s7").text() !== person && $("#s7").text() !== aiPlayer:
    drawPos("s7");
    break;
    case $("#s8").text() !== person && $("#s8").text() !== aiPlayer:
    drawPos("s8");
    break;
  }
};

function resetGame(){
  history.go(0);
}
