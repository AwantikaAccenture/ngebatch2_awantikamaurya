/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from './palindrome'

describe('When calling the palindrome function', () => {
  console.log("CAll the function ");
      let result :boolean;
  beforeEach(()=>{
      result = palindrome("abba");
  })     

  it('will return true or false when called',()=>{
      
      // Assert 
      //console.log("Compare the results with actual and expected");
      expect(result).toBe(true);
  })
 

  


})
describe('When calling  invalid the palindrome function', () => {
  console.log("CAll the function ");
      let result :boolean;
  beforeEach(()=>{
      result = palindrome("123");
  })     

  it('will return false for invalid inputs',()=>{
      
      // Assert 
      //console.log("Compare the results with actual and expected");
      expect(result).toBe(false);
  })
 

 

 
})
describe('When calling the palindrome function', () => {
  console.log("CAll the function ");
      let result :boolean;
  beforeEach(()=>{
      result = palindrome("abba");
  })     

  it('will return true for text that is a palindrome',()=>{
      
      // Assert 
      //console.log("Compare the results with actual and expected");
      expect(result).toBe(true);
  })
 

  
})
