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

function game2(playerInput,div)
{
    let computerInput=computerPlay();
    let result=oneRound(playerInput,computerInput);
    if(result==0)
    {
        div.textContent ="It's a Draw!";
        return result;
    }
    else if(result==1)
    {
        div.textContent ='You Win! '+playerInput[0].toUpperCase()+playerInput.slice(1)+' beats '+computerInput[0].toUpperCase()+computerInput.slice(1);
        return result;
    }
    else if(result==-1)
    {
        div.textContent ='You Lose! '+computerInput[0].toUpperCase()+computerInput.slice(1)+' beats '+playerInput[0].toUpperCase()+playerInput.slice(1);
        return result;
    }
}

function stage()
{
    let res;
    let playerScore = 0;
    let computerScore = 0;
    let counter=0;
    const rock = document.querySelector('#rock');
    rock.addEventListener('click',() => {
        //console.log(oneRound('rock',computerPlay()));
        if(counter<5)
        {
            res = game2('rock',div);
            if(res==-1)
            {
                computerScore+=1;
            }
            else if(res==1)
            {
                playerScore+=1;
            }
            counter+=1;
            playerScoreDiv.textContent = `Player score - ${playerScore}`;
            computerScoreDiv.textContent = `Computer score - ${computerScore}`;
        }
        if(counter>=5)
        {
            if (computerScore>playerScore)
            {
                winnerDiv.textContent='Computer Wins with '+computerScore+' points';
            }
            else if (computerScore<playerScore)
            {
                winnerDiv.textContent='You Win with '+playerScore+' points';
            }
            else
            {
                winnerDiv.textContent="It's a draw!";
            }
        }
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click',() => {
        //console.log(oneRound('rock',computerPlay()));
        if(counter<5)
        {
            res = game2('paper',div);
            if(res==-1)
            {
                computerScore+=1;
            }
            else if(res==1)
            {
                playerScore+=1;
            }
            counter+=1;
            playerScoreDiv.textContent = `Player score - ${playerScore}`;
            computerScoreDiv.textContent = `Computer score - ${computerScore}`;
        }
        if(counter>=5)
        {
            if (computerScore>playerScore)
            {
                winnerDiv.textContent='Computer Wins with '+computerScore+' points';
            }
            else if (computerScore<playerScore)
            {
                winnerDiv.textContent='You Win with '+playerScore+' points';
            }
            else
            {
                winnerDiv.textContent="It's a draw!";
            }
        }
    });

    const scissor = document.querySelector('#scissor');
    scissor.addEventListener('click',() => {
    //console.log(oneRound('rock',computerPlay()));
        if(counter<5)
        {
            res = game2('paper',div);
            if(res==-1)
            {
                computerScore+=1;
            }
            else if(res==1)
            {
                playerScore+=1;
            }
            counter+=1;
            playerScoreDiv.textContent = `Player score - ${playerScore}`;
            computerScoreDiv.textContent = `Computer score - ${computerScore}`;
        }
        if(counter>=5)
        {
            if (computerScore>playerScore)
            {
                winnerDiv.textContent='Computer Wins with '+computerScore+' points';
            }
            else if (computerScore<playerScore)
            {
                winnerDiv.textContent='You Win with '+playerScore+' points';
            }
            else
            {
                winnerDiv.textContent="It's a draw!";
            }
        }
    });
}

/*Steps
1. Get inputs from buttons and trigger the different evernts using event handlers.
2. display the output using a div*/

const div = document.createElement('div');

const playerScoreDiv = document.createElement('div');
const computerScoreDiv = document.createElement('div');
const winnerDiv = document.createElement('div');

stage();

const container = document.querySelector('#container');
container.appendChild(div)
container.appendChild(playerScoreDiv)
container.appendChild(computerScoreDiv)
container.appendChild(winnerDiv)