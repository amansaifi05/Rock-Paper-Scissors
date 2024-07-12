const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score");
const computerscorepara =document.querySelector("#computer-score");

let userscore = 0;
let computerscore = 0;

const getcomputerchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
};

const drawgame =()=> {
    // console.log ("Draw Game");
    msg.innerText = "Game Draw! Try Again";
     msg.style.backgroundColor = "#081b31"
}

const showwinner =(userwin , userchoice , computerchoice)=> {
    if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You Win  your  ${computerchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "green"
    } else {
    computerscore++;
    computerscorepara.innerText = computerscore;
    msg.innerText = `You Lose  ${userchoice} beats  your ${computerchoice}`;
     msg.style.backgroundColor = "red"
    }
}


const playgame= (userchoice) => {
    // console.log("user-choice",userchoice);
    //generate computer choice 
    const computerchoice = getcomputerchoice();
    // console.log("computer-choice",computerchoice);

    if( userchoice===computerchoice)
        //draw game 
    drawgame();
    else 
    {
        let userwin = true;
        if (userchoice=== "rock")
             {
                userwin= computerchoice === "paper" ?  false : true;
             }
             else if (userchoice === "paper"){
                userwin= computerchoice === "scissors" ? false : true;
             }
             else
             {
                userwin= computerchoice === "rock" ? false : true;
             }
             showwinner (userwin , computerchoice, userchoice);

    }

}

choices.forEach((choice) =>  {
choice.addEventListener("click", () => {
   const userchoice = choice.id;
   playgame (userchoice);
});
});