let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document .querySelector("#comp-score");
const gencompchoice= ()=> {
    const options=["rock" ,"paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 };

const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;        
        msg.innerHTML=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerHTML=`you lose!  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
    updateScore();
};

const drawgame=()=>{
    
    msg.innerHTML=("game was draw. play again.");
    msg.style.backgroundColor="black";
};

const playgame=(userchoice) =>{
    console.log("user choice = ", userchoice);
    
    const compchoice=gencompchoice();
    console.log("comp choice = ", compchoice);

    if(userchoice===compchoice){
        drawgame();
        
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false : true;

        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors" ? false :true;

        }else{
            userwin=compchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked ", userchoice);
        playgame(userchoice);
    });
});