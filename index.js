var randomNumber1 = Math.floor(Math.random() *6 )+ 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player One win";
}
else if(randomNumber1 < randomNumber2){
   document.querySelector("h1").innerHTML = "Player TWO win";
}
else {

  document.querySelector("h1").innerHTML = "DRAW!";
}
