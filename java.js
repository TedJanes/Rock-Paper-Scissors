let userAnswer = question()
let compAnswer = compChoice()
//rock =0, paper = 1, scissor = 2
function question() {
    let userAnswer = ''
    let choice = prompt('Rock, Paper, or Scissors?')
    choice = choice.toLowerCase()
    if (choice === 'rock') {
    alert('You have chosen rock')
    answer = 0
  } else if (choice === 'paper') {
    alert('You have chosen paper')
    answer = 1
} else if (choice === 'scissors') {
    alert('You have chosen Scissors')
    answer = 2
    }
    else {
    alert('Invalid answer: please choose Rock, Paper, or Scissors.')
    question()
    } 
    return userAnswer
}
// Computer needs to choose a number between 1-3 randomly and selects it. 1-3 = r, p. or s.  computer then sends answer
function compChoice() {
    return Math.floor(Math.random * 2)
}

