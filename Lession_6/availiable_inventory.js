let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemId, transactionList) {
  return transactionList.filter(transObj => transObj['id'] === itemId);
}

function isItemAvailable(itemId, transactionList) {
  let sum = transactionsFor(itemId, transactionList).reduce((acc, transObj) => {
    if (transObj['movement'] === 'in') {
      return acc + transObj['quantity'];
    } else {
      return acc - transObj['quantity'];
    }
  }, 0);

  return sum > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true