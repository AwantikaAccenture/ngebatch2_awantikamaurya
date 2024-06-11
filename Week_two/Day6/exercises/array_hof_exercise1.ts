const balances = [1, 10, 50]
// const total =0;
const totaliser = (total:number, balance:any) => total + balance
const startingBalance = 0
const sum = balances.reduce(totaliser, startingBalance)
console.log(sum)