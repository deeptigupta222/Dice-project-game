

document.getElementById("start").addEventListener("click", function () {
    makeSound();
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("p1").src = `assests/${p1}.png`;
    document.getElementById("p2").src = `assests/${p2}.png`;
    if (p1 > p2) {
      document.querySelector("h1").textContent = "🏆🥳 Player 1 wins 🏆🥳";
    } else if (p1 < p2) {
      document.querySelector("h1").textContent = "🏆🥳 Player 2 wins 🏆🥳";
    } else {
      document.querySelector("h1").textContent = "😢 Oops! It's a DRAW 😢";
    }
  });
  
  function makeSound() {
    var audio = new Audio("assests/sound.mp3"); //for sound
    audio.play();
  }



  
