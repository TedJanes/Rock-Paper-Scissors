// collects user's choice of rock, paper or scissors but is cas sensitive on the answer
function question() {
    let response
    let choice = prompt('Rock, Paper, or Scissors?')
    if ('rock') {
    response = 'You have chosen rock'
  } else if ('paper') {
    response = 'You have chosen paper'
} else if ('scissors') {
    response = 'You have chosen Scissors'
    }
    else {
    response = 'Invalid answer: please choose Rock, Paper, or Scissors.'
    } 
    return response
}
question(response)
//I dont think choice is getting saved as an answer
console.log(response)