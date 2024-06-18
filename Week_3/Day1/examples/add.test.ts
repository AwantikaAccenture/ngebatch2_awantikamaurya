//testing module

//keywords to be added

//describe- to define the  suite
//it - amethod used to define
//import the logic file
import {add} from './add'
describe ("to test the add module with one positive and one negative ",()=>{
    // Follow the 3 A's 
     let result: number;

     // Arrange 
         console.log("To setup the data ");         
      // Act 
         console.log("CAll the function ");
         
         beforeEach(()=>{
             result = add(34,-4);
         })     
   
         it('add two numbers with 34 and -4 to be 30',()=>{
             
             // Assert 
             //console.log("Compare the results with actual and expected");
             expect(result).toBe(30);
         })
})

describe ("to test the add module ",()=>{
 // Follow the 3 A's 
  let result: number;

  // Arrange 
      console.log("To setup the data ");         
   // Act 
      console.log("CAll the function ");
      
      beforeEach(()=>{
          result = add(34,45);
      })     

      it('add two numbers with 34 and 45 to be 79',()=>{
          
          // Assert 
          //console.log("Compare the results with actual and expected");
          expect(result).toBe(79);
      })
})

describe ("to test the add module with two neg numbers",()=>{
 // Follow the 3 A's 
  let result: number;

  // Arrange 
      console.log("To setup the data ");         
   // Act 
      console.log("CAll the function ");
      
      beforeEach(()=>{
          result = add(-34,-6);
      })     

      it('add two numbers with -34 and -6 to be 50',()=>{
          
          // Assert 
          //console.log("Compare the results with actual and expected");
          expect(result).toBe(50);
      })
})

