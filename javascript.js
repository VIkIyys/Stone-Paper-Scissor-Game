let Userscore=0;
let Compscore=0;
const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#message");

UserScorepara=document.querySelector("#user-score")
Compscorepara=document.querySelector("#COMP-score")
const genCompChoice=()=>{
    const options=["rock","paper","Scirror"];
    const randomIDX=Math.floor(Math.random()*3);
    return options[randomIDX];

}

const DrawGame=()=>{
    console.log("the game was draw");
    message.innerText="The Game Was Draw.Play Again"
    message.style.backgroundColor="blue";
}
const showWinner = (UserWin,userChoice,Compchoice)=> { 
    if (UserWin){
       Userscore++;
       UserScorepara.innerText=Userscore;
        message.innerText=`Congrats,Your ${userChoice} beats ${Compchoice}`; 
        message.style.backgroundColor="Green";
    }
    else{
       Compscore++;
       Compscorepara.innerText=Compscore;
        message.innerText=`Sorry, ${Compchoice} beats your ${userChoice}`;
        message.style.backgroundColor="Red";
    }
    }

const playGame=(userChoice)=>{
    console.log("choice of the user is,",userChoice);
    const Compchoice=genCompChoice();
    console.log("comp choice",Compchoice);
    if(userChoice===Compchoice){
        DrawGame();
        
    }
    else{
        let UserWin = true;
        if(userChoice==="rock"){
            UserWin=Compchoice ==="paper" ? false:true;
        }else if(userChoice=="paper") {
                UserWin=Compchoice ==="Scirror" ? false:true;
        } else {
            UserWin=Compchoice ==="rock" ? false:true;

            }
           
        
        showWinner(UserWin,userChoice,Compchoice);

    }
  
}
choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
      const  userChoice=choice.getAttribute("id");
        playGame(userChoice);

       
    })
})