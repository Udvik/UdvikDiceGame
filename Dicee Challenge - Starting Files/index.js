var player1=Math.floor(Math.random()*6);   
var player2=Math.floor(Math.random()*6);
var array=["dice1","dice2","dice3","dice4","dice5","dice6"];
var dice1=array[player1]
var dice2=array[player2]
document.getElementById("firstDice").src="./images/"+dice1+".png";
document.getElementById("secondDice").src="./images/"+dice2+".png";
if(player1>player2){
    document.getElementById("heading").innerHTML=("Player 1 Won "+"&#128144;");
}
else if(player1<player2){
    document.getElementById("heading").innerHTML=("Player 2 Won"+"&#128144;");                                
}
else{
    document.getElementById("heading").innerHTML=("Draw"+"&#129309;");
}
