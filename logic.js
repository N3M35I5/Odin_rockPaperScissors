function computerPlay()
{
    const choice = ['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}

function oneRound(player,computer)//win=1 lose=-1 draw=0
{
    if(player=='rock'){
        if(computer=='paper'){
            return -1;
        }
        else if(computer=='scissor')
        {
            return 1;
        }
        else if (computer=='rock') 
        {
            return 0;
        }
    }
    else if(player=='paper'){
        if(computer=='paper'){
            return 0;
        }
        else if(computer=='scissor')
        {
            return -1;
        }
        else if (computer=='rock') 
        {
            return 1;
        }
    }
    else if(player=='scissor'){
        if(computer=='paper'){
            return 1;
        }
        else if(computer=='scissor')
        {
            return 0;
        }
        else if (computer=='rock') 
        {
            return -1//('You Lose! Rock beats Scissor');
        }
    }
    else
    {
        return oneRound(prompt('Enter valid input:'),computer);
    }
}

function game()
{
    let playerScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++)
    {
        let playerInput = prompt("Choose Rock, Paper, Scissor").toLowerCase();
        let computerInput=computerPlay();
        result=oneRound(playerInput,computerInput);
        if(result==0)
        {
            console.log("It's a Draw!");
        }
        else if(result==1)
        {
            console.log('You Win! '+playerInput[0].toUpperCase()+playerInput.slice(1)+' beats '+computerInput[0].toUpperCase()+computerInput.slice(1));
            //console.log('You Win! '+playerInput[0].toUpperCase()+playerInput[1,-1]+' beats '+computerInput)
            playerScore+=1;
        }
        else if(result==-1)
        {
            console.log('You Lose! '+computerInput[0].toUpperCase()+computerInput.slice(1)+' beats '+playerInput[0].toUpperCase()+playerInput.slice(1));
            computerScore+=1;
        }
    }
    if (computerScore>playerScore)
    {
        console.log('Computer Wins with '+computerScore+' points');
    }
    else if (computerScore<playerScore)
    {
        console.log('You Win with '+playerScore+' points');
    }
    else
    {
        console.log("It's a draw!");
    }
}

function game2(playerInput,div)
{
    let computerInput=computerPlay();
    let result=oneRound(playerInput,computerInput);
    if(result==0)
    {
        div.textContent ="It's a Draw!";
    }
    else if(result==1)
    {
        div.textContent ='You Win! '+playerInput[0].toUpperCase()+playerInput.slice(1)+' beats '+computerInput[0].toUpperCase()+computerInput.slice(1);
    }
    else if(result==-1)
    {
        div.textContent ='You Lose! '+computerInput[0].toUpperCase()+computerInput.slice(1)+' beats '+playerInput[0].toUpperCase()+playerInput.slice(1);
    }
}

/*Steps
1. Get inputs from buttons and trigger the different evernts using event handlers.
2. display the output using a div*/

const div = document.createElement('div');


const rock = document.querySelector('#rock');
rock.addEventListener('click',() => {
    //console.log(oneRound('rock',computerPlay()));
    game2('rock',div)
  });

const paper = document.querySelector('#paper');
paper.addEventListener('click',() => {
    //console.log(oneRound('rock',computerPlay()));
    game2('paper',div)
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click',() => {
    //console.log(oneRound('rock',computerPlay()));
    game2('rock',div)
    });

const container = document.querySelector('#container');
container.appendChild(div)

