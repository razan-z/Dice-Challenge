if (!localStorage.getItem('visited')) {
  localStorage.setItem('visited', 'true');

  document.querySelector("h1").textContent = "Refresh please";
} else {
  // Subsequent visits: randomize dice images and display winner
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + dice1 + ".png");
  document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + dice2 + ".png");

  var h1 = "";
  if (dice1 > dice2) {
    h1 += "🚩 Player 1 Wins";
  } else if (dice2 > dice1) {
    h1 += "🚩 Player 2 Wins";
  } else {
    h1 += "Draw!";
  }
  document.querySelector("h1").textContent = h1;
}
