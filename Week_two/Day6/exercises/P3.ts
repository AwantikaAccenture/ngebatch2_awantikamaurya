const empInitialState ={name:"john", age:"30"}
let copy ={...empInitialState};
console.log("before")
console.log(empInitialState);
console.log(copy);
console.log("After")

empInitialState.name ="Accenture";

console.log(empInitialState);
console.log(copy);
