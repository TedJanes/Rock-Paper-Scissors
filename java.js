duel(question(), compChoice())
//rock =0, paper = 1, scissor = 2
function question() {
    let userAnswer = ''
    let choice = prompt('Human, I challenge you to Rock, Paper, or Scissors. What do you choose?')
    choice = choice.toLowerCase()
    if (choice === 'rock') {
    alert('You have chosen rock')
    userAnswer = 0
  } else if (choice === 'paper') {
    alert('You have chosen paper')
    userAnswer = 1
} else if (choice === 'scissors') {
    alert('You have chosen Scissors')
    userAnswer = 2
    }
    else {
    alert('Invalid answer: please choose Rock, Paper, or Scissors.')
    question()
    } 
    return userAnswer
}
function compChoice() {//+
    return Math.floor(Math.random * 2)
}
//function duel(user, comp) {
    //return user > comp ? alert('I am defeated') 
    //: user == comp ? alert('Fuck a tie, we go again')//needs fixed
    //: user < comp ? alert('I am victorious'): console.log('mark has smol pp')
    
}
