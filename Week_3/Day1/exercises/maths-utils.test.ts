/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from './maths-utils'

describe('When calling the Add function', () => {
 // Arrange: Setup variables here
 let a = 10
 let b = 20
 let result:Number;
  // Act: Call function here
  beforeEach(()=>{
    result =add(a,b)

  })
  it('should add two integers', () => {
    expect(result).toBe(30)

    // Act: Call function here

    // Assert: Check results here

  })

  
})

describe('Will add strings and numbers',() =>{
  let a:string ='2'
  let b:number = 3
  let result:any;
  beforeEach(() => {
    result = add(a,b)
    console.log(result)
  })
  it('will add strings and numbers',() =>{
   expect(result).toBeTruthy
  })

})

describe('When calling the safeMultiply function', () => {
   // Arrange: Setup variables here
    // Hint: happy case
  let a =3;
  let b =4;
  let result:any;

  // Act: Call function here
  beforeEach(()=>{
    result = safeMultiply(a,b)
  })

  // Assert: Check results here
 it('should multiply two integers', () => {
   expect(result).toBeTruthy

    

    
 })
    

})
describe('When calling the safeMultiply function with passing string variable', () => {
  // Arrange: Setup variables here
  
 let a ='3';
 let b =4;
 let result:any;

 // Act: Call function here
 beforeEach(()=>{
  
   result = safeMultiply(a,b)
 })

 // Assert: Check results here
it('will throw an error when parameter a is bad', () => {
  expect(result).toThrow

   

   

 })

 
   

})
describe('When calling the safeMultiply function with passing string variable', () => {
  // Arrange: Setup variables here
  
 let a =3;
 let b ='4';
 let result:any;

 // Act: Call function here
 beforeEach(()=>{
  
   result = safeMultiply(a,b)
 })

 // Assert: Check results here
it('will throw an error when parameter b is bad', () => {
  expect(result).toThrow

   

   

 })
})
