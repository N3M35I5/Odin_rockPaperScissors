function computerPlay()
{
    const choice = ['rock','paper','scissor']
    return choice[Math.floor(Math.random()*3)]
}

function oneRound(player,computer)//win=1 lose=-1 draw=0
{
    if(player=='rock'){
        if(computer=='paper'){
            return -1
        }
        else if(computer=='scissor')
        {
            return 1
        }
        else if (computer=='rock') 
        {
            return 0
        }
    }
    else if(player=='paper'){
        if(computer=='paper'){
            return 0
        }
        else if(computer=='scissor')
        {
            return -1
        }
        else if (computer=='rock') 
        {
            return 1
        }
    }
    else if(player=='scissor'){
        if(computer=='paper'){
            return 1
        }
        else if(computer=='scissor')
        {
            return 0
        }
        else if (computer=='rock') 
        {
            return -1//('You Lose! Rock beats Scissor')
        }
    }
    else
    {
        return oneRound(prompt('Enter valid input:'),computer)
    }
}

