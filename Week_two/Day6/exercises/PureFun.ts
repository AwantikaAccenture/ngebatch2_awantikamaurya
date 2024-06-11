// Should ONLY ever add 1
const addOnePure = (i) => i + 1
const addOneImpure = (i) => {
 updateDatabase(i + 1) // Side Effect
 console.log(i + 1) // Side Effect
 state.result = i + 1 // Side Effect
 return i + 1
}