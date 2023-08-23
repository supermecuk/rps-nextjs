

export function playGame(playerMove: string, compMove: string) {


  let result = "";

  if (playerMove === "scissors") {
    if (compMove === 'rock') {
    result = 'You are Loser.';
  } else if (compMove === 'paper') {
    result = 'You are Winner.';   
  } else if (compMove === 'scissors') {
    result = 'Tie.';
  }

} else if (playerMove === "paper") {
    if (compMove === 'rock') {
    result = 'You are Winner.';
  } else if (compMove === 'paper') {
    result = 'Tie.';   
  } else if (compMove === 'scissors') {
    result = 'You are Loser.';
  }
  
} else if (playerMove === "rock") {
    if (compMove === 'rock') {
    result = 'Tie.';
  } else if (compMove === 'paper') {
    result = 'You are Loser.';   
  } else if (compMove === 'scissors') {
    result = 'You are Winner.';
  }
  
}

return result;
}

