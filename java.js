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
    alert('You have chosen scissors')
    userAnswer = 2
    }
    else {
    alert('Invalid answer: please choose Rock, Paper, or Scissors.')
    question()
    } 
    return userAnswer
}
function compChoice() {
    return Math.floor(Math.random() * 2)
}
//if the user is rock, and the computer is rock then a tie, if user rock
function duel(user, comp) {
    stringifyCompChoice(comp)
    return user == 0 && comp == 1 ? userWin()
         : user == 0 && comp == 2 ? userLoss()
         : user == 1 && comp == 0 ? userLoss()
         : user == 1 && comp == 2 ? userWin()
         : user == 2 && comp == 0 ? userLoss()
         : user == 2 && comp == 1 ? userWin()
         : user == comp ? isTie() : console.log('markhassmallpp')
}
function userWin() {
    alert('I am victorious!')

}

function userLoss() {
    alert('I am defeated!')
}
function isTie(user, comp) {
    alert('Fuck a tie, we go again')
    duel(question(), compChoice()) 
}
function stringifyCompChoice(compChoice) {
    return compChoice == 0 ? alert('I have chosen rock')
         : compChoice == 1 ? alert('I have chosen paper')
         : compChoice == 2 ? alert('I have chosen scissors')
         : alert('My brain hurts leave me alone')
}duel(question(), compChoice())

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
    alert('You have chosen scissors')
    userAnswer = 2
    }
    else {
    alert('Invalid answer: please choose Rock, Paper, or Scissors.')
    question()
    } 
    return userAnswer
}
function compChoice() {
    return Math.floor(Math.random() * 2)
}
//if the user is rock, and the computer is rock then a tie, if user rock
function duel(user, comp) {
    stringifyCompChoice(comp)
    return user == 0 && comp == 1 ? userLoss()
         : user == 0 && comp == 2 ? userWin()
         : user == 1 && comp == 0 ? userWin()
         : user == 1 && comp == 2 ? userLoss()
         : user == 2 && comp == 0 ? userLoss()
         : user == 2 && comp == 1 ? userWin()
         : user == comp ? isTie() : console.log('markhassmallpp')
}
function userWin() {
    alert('I am victorious!')

}

function userLoss() {
    alert('I am defeated!')
}
function isTie(user, comp) {
    alert('Fuck a tie, we go again')
    duel(question(), compChoice()) 
}
function stringifyCompChoice(compChoice) {
    return compChoice == 0 ? alert('I have chosen rock')
         : compChoice == 1 ? alert('I have chosen paper')
         : compChoice == 2 ? alert('I have chosen scissors')
         : alert('My brain hurts leave me alone')
}