// 7 kyu Rock Paper Scissors Lizard Spock

const pairings = {
  'rock': ['scissors', 'lizard'],
  'paper': ['rock', 'spock'],
  'scissors': ['paper', 'lizard'],
  'lizard': ['paper', 'spock'],
  'spock': ['rock', 'scissors'],
}

function rpsls (choice1, choice2) {
  if (choice1 === choice2) return 'Draw!'
  if (pairings[choice1].includes(choice2)) return 'Player 1 Won!'
  return 'Player 2 Won!'
}
