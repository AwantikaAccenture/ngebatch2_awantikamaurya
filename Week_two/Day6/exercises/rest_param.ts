// Cursor Park (anyone not typing put your cursor here)

// Lets make a function that returns all names at once
// Sam Byron Mark Aisha Megan

const addNames = (per1:string,per2:string,per3:string,per4:string,per5:string)=>{
    return per1+" "+per2+" "+" "+per3+" "+per4+" "+per5;
}

const resultNames = addNames('Sam', 'Byron', 'Mark', 'Aisha', 'Megan')

console.log(`addNames = ${resultNames}`)
console.log('As an array = ', resultNames)
console.log('As a string = ', resultNames.toString())


