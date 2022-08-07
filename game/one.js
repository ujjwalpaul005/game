let stone;
let paper;
let scissor;
let you;

let your_score = 0;
let comp_score = 0;

let inText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


let game = (you) =>{
    let comp = Math.floor(Math.random() * 3);

    if(you == "stone"){
        you = 0;
    }else if(you == "paper"){
        you = 1;
    }else{
        you = 2;
    }

    if(you == 0 && comp ==1){
        comp_score++;
    } else if (you == 1 && comp == 2){
        comp_score++
    }else if(you == 2 && comp == 0){
        comp_score++;
    }else if(you == 1 && comp == 0){
        your_score++;
    }else if(you == 2 && comp == 1){
        your_score++;
    }else if(you == 0 && comp == 2){
        your_score++;
    }else{
        console.log("draw");
    }

    inText("comp_score", comp_score);
    inText("you_score", your_score);


    console.log(comp_score, your_score);
}

stone = () =>{
    you = "stone";
    game(you);
}
paper = () =>{
    you = "paper";
    game(you);
}
scissor = () =>{
    you = "scissor";
    game(you);
}

document.getElementById("stone").addEventListener("click", stone);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissor").addEventListener("click", scissor);