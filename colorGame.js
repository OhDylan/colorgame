let numSquare=6;
let colors= generateRandomColors(numSquare);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

resetButton.addEventListener("click", function(){

    //generate all new colors
    colors = generateRandomColors(numSquare);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    //change colors of squares
    for (let i = 0; i< squares.length; i++) {
        squares[i].style.background = colors[i];
        }
    h1.style.background = "steelblue";
    })
    

easyBtn.addEventListener("click", function(){

    //add selected and remove the other one
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    //assign colors
    numSquare = 3;
    colors = generateRandomColors(numSquare)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
                }
    }
})

hardBtn.addEventListener("click", function(){

    //add selected and remove the other one
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    //assign colors
    numSquare = 6;
    colors = generateRandomColors(numSquare)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length;i++){
      
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
})


for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor= this.style.background;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changecolors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";

        }
    })
}

function changecolors(colors){
    for(let i = 0; i<squares.length;i++){
        squares[i].style.background = colors;
    }
}


function pickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    let arr = [];
    for (let i = 0 ; i< num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", "+ g + ", "+ b +")"
}