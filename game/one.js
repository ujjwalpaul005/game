let stone;
let paper;
let scissor;

let you;

let your_score = 0;
let comp_score = 0;

let inText = (id, text) => {
  document.getElementById(id).innerText = text;
};

let pic = (opt) => {
  let url;
  if (opt == 1) {
    url =
      "https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png";
  } else if (opt == 2) {
    url = "https://image.pngaaa.com/787/3313787-middle.png";
  } else {
    url =
      "https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png";
  }

  return url;
};

let showIt = (you, comp) => {
  let youPic = pic(you);
  let compPic = pic(comp);
  
  document.getElementById("area").innerHTML = `
        <img
            src=${compPic}
        />
        <img
            src=${youPic}
        />
    `;

  setTimeout(() => {
      document.body.
    document.getElementById("area").innerHTML = null;
  }, 2000);
};

let game = (you) => {
  let comp = Math.floor(Math.random() * 3);

  if (you == "stone") {
    you = 0;
  } else if (you == "paper") {
    you = 1;
  } else {
    you = 2;
  }

  if (you == 0 && comp == 1) {
    comp_score++;
  } else if (you == 1 && comp == 2) {
    comp_score++;
  } else if (you == 2 && comp == 0) {
    comp_score++;
  } else if (you == 1 && comp == 0) {
    your_score++;
  } else if (you == 2 && comp == 1) {
    your_score++;
  } else if (you == 0 && comp == 2) {
    your_score++;
  } else {
    console.log("draw");
  }

  inText("comp_score", comp_score);
  inText("you_score", your_score);

  //   console.log(comp_score, your_score);
  showIt(you, comp);

  if (comp_score == 5) {
    setTimeout(() => {
      window.alert("Oops! Computer won. Try Again.");
      window.location.reload();
    }, 500);
  } else if (your_score == 5) {
    setTimeout(() => {
      window.alert("Yaay! You won the match. Let's play again.");
      window.location.reload();
    }, 500);
  }

  if (comp_score > your_score) {
    document.getElementById("comp_score").style.color = "green";
    document.getElementById("you_score").style.color = "red";
  } else if (comp_score < your_score) {
    document.getElementById("comp_score").style.color = "red";
    document.getElementById("you_score").style.color = "green";
  } else {
    document.getElementById("comp_score").style.color = "white";
    document.getElementById("you_score").style.color = "white";
  }
};

stone = () => {
  you = "stone";
  game(you);
};
paper = () => {
  you = "paper";
  game(you);
};
scissor = () => {
  you = "scissor";
  game(you);
};

document.getElementById("stone").addEventListener("click", stone);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissor").addEventListener("click", scissor);
