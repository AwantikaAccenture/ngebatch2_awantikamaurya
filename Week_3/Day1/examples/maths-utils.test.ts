/*
Don't change this file - change the one in ./exercises instead!

Run this with
> npm install
> npm test maths-utils
*/

import { add } from './maths-utils'

describe('When calling the Add function', () => {
  let result: number;

     // Arrange 
         console.log("To setup the data ");         
      // Act 
         console.log("CAll the function ");
         
         beforeEach(()=>{
             result = add(4,4);
         })     
   
         it('add two numbers with 4 and 4 to be 8',()=>{
             
             // Assert 
             //console.log("Compare the results with actual and expected");
             expect(result).toBe(8);
         })
  // it('should add two integers', () => {
  //   // Arrange
  //   console.log('Setup variables here')

  //   // Act
  //   console.log('Call function here')

  //   // Assert
  //   console.log('Check results here')
  // })
})
