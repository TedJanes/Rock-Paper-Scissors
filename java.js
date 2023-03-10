// collects user's choice of rock, paper or scissors but is cas sensitive on the answer
function question() {
   let choice = prompt('Rock, Paper, or Scissors?')
    if ('rock') {
        choice = 'You have chosen rock'
  } else if ('paper') {
        choice = 'You have chosen paper'
} else if ('scissors') {
        choice = 'You have chosen Scissors'
    }
    else {
        choice = 'Invalid answer: please choose Rock, Paper, or Scissors.'
    } 
    return choice
}
question(choice)
//I dont think choice is getting saved as an answer
console.log(choice)