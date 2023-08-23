export function exportPaper() {
  const params = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ playerMove: "paper" }),
  }
};

export function exportRock() {
  const params = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ playerMove: "rock" }),
  }
};

export function exportScissors() {
  const params = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ playerMove: "scissors" }),
  }
};

/*export function exportBody() {
  const params = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ playerMove: "" }),
  }
};*/