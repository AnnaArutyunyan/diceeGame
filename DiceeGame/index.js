window.onload = function(){
  dice1();
  dice2();
}

var randomNum1 = Math.ceil(Math.random()*6);


function dice1(){
  switch(randomNum1){
    case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    break;
    case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;
    case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;
    case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;
    case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;
    case 6:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;

  }
}

  var randomNum2 = Math.ceil(Math.random()*6);

  function dice2(){
    switch(randomNum2){
      case 1:
      document.querySelector(".img2").setAttribute("src", "images/dice1.png");
      break;
      case 2:
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
      break;
      case 3:
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
      break;
      case 4:
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
      break;
      case 5:
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
      break;
      case 6:
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      break;

    }
  }

    if(randomNum1 > randomNum2){
      document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if(randomNum1 < randomNum2){
      document.querySelector("h1").innerHTML = "Player 2 Wins";
 }
 else{
   document.querySelector("h1").innerHTML = "Draw";
 }
