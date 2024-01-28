console.log("welcome to tick tac toe");
let music=new Audio("music.mp3");
let turnMusic=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let gameOver=false;

//function to change the turn from  to y and y to x
const chnageTurn=()=>{
    return turn==="X"?"O":"X";

}

//function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e  =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!==""))
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won";
            gameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            gameover.play();
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })

}

// music.play();
//start the game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=chnageTurn();
            turnMusic.play();
            checkWin();
            if(!gameOver)
            {
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;   
            }
        }
    })
})

// let reset=getElementsById('reset');
//add on click listerner to reset buttob
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    turn="X";
    gameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;   
})
    