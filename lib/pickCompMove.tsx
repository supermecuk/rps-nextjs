export function pickCompMove() {
  const randomNumber = Math.random();
  
  let compMove = '';
  
  if (randomNumber >=0 && randomNumber < 1 / 3) {
  compMove = 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  compMove = 'paper' 
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  compMove = 'scissors'
  }
  
  return compMove;
  }
