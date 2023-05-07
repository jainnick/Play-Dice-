
function checkWin(num1, num2)
{
    if (num1 > num2)
    {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }
    else if (num2 > num1)
    {
     document.querySelector("h1").textContent = "Player 2 Wins! 🚩";   
    }
    else
    {
        document.querySelector("h1").textContent = "Draw!";
    }
    
}
/*......can be done using array.....................*/
//var arrayofdiceimage = ['images/dice1.png', 'images/dice2.png', 'images/dice3png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];


    var randonNumber1 = Math.floor((Math.random() * 6))+1;//1-6
    var randomimagesrc = "images/dice" +randonNumber1+".png"; //images/dice1.png - images/dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomimagesrc);

    var randonNumber2 = Math.floor((Math.random() * 6))+1;
    var randomimage2src = "images/dice" + randonNumber2+".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomimage2src);
    checkWin(randonNumber1, randonNumber2);


