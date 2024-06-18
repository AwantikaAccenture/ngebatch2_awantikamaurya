/*
Run this with
> npm install
> npm test zoo-animals
*/

import { addDolphinToPool, petThePenguins } from './zoo-animals'

describe('When adding a dolphin to the pool', () => {

    // Arrange
  let speedkm:number =35;
  let result:any;
  // Act 
  beforeEach(()=>{
    result = addDolphinToPool(speedkm)
  })
   // Assert
    // Hint: expect.objectContaining on name only
  test('And speed is over 30 we get Speedy Alice', () => {
   
    expect.objectContaining(result)
      console.log(result)  
    

   
  })

  // test('And speed is under 30 we get Slow Bob', () => {
  //   // Arrange

  //   // Act 

  //   // Assert
  //   // Hint: expect.objectContaining on name only
  // })

  // test('Speedy Alice is a fast mammal with two flippers', () => {
  //   // Arrange

  //   // Act 

  //   // Assert
  //   // Hint: toStrictEqual the whole object
  // })

  // test('Slow Bob is a slow mammal with two flippers', () => {
  //   // Arrange

  //   // Act 

  //   // Assert
  //   // Hint: toStrictEqual the whole object
  // })
})
describe('When adding a dolphin to the pool', () => {

  // Arrange
let speedkm:number =28;
let result:any;
// Act 
beforeEach(()=>{
  result = addDolphinToPool(speedkm)
})
 // Assert
  // Hint: expect.objectContaining on name only
test('And speed is under 30 we get Slow Bob', () => {
 
  expect.objectContaining(result)
    console.log(result)  
  

 
})



// test('Speedy Alice is a fast mammal with two flippers', () => {
//   // Arrange

//   // Act 

//   // Assert
//   // Hint: toStrictEqual the whole object
// })

// test('Slow Bob is a slow mammal with two flippers', () => {
//   // Arrange

//   // Act 

//   // Assert
//   // Hint: toStrictEqual the whole object
// })
})
describe('When adding a dolphin to the pool', () => {

  // Arrange
let speedkm:number =35;
let result:any;
const expectedDolphin = {
  name: 'Speedy Alice',
  swimSpeedKph: 35, // Adjust according to the expected test case
  flippers: 2,
  mammal: true
};
// Act 
beforeEach(()=>{
  result = addDolphinToPool(speedkm)
})
 // Assert
  // Hint: expect.objectContaining on name only
test('Speedy Alice is a fast mammal with two flippers', () => {
 
  expect(result).toStrictEqual(expectedDolphin)
    console.log(result)  
  

 
})



// test('Speedy Alice is a fast mammal with two flippers', () => {
//   // Arrange

//   // Act 

//   // Assert
//   // Hint: toStrictEqual the whole object
// })

// test('Slow Bob is a slow mammal with two flippers', () => {
//   // Arrange

//   // Act 

//   // Assert
//   // Hint: toStrictEqual the whole object
// })
})
describe('When adding a dolphin to the pool', () => {

  // Arrange
let speedkm:number =28;
let result:any;
const expectedDolphin = {
  name: 'Slow Bob',
  swimSpeedKph: 28, // Adjust according to the expected test case
  flippers: 2,
  mammal: true
};
// Act 
beforeEach(()=>{
  result = addDolphinToPool(speedkm)
})
 // Assert
  // Hint: expect.objectContaining on name only
test('Slow Bob is a slow mammal with two flippers', () => {
 
  expect(result).toStrictEqual(expectedDolphin)
    console.log(result)  
  

 
})



// test('Speedy Alice is a fast mammal with two flippers', () => {
//   // Arrange

//   // Act 

//   // Assert
//   // Hint: toStrictEqual the whole object
// })

// test('Slow Bob is a slow mammal with two flippers', () => {
//   // Arrange

//   // Act 

//   // Assert
//   // Hint: toStrictEqual the whole object
// })
})

describe('When petting the penguins', () => {

  let result:any;
   let noOfPenguin = 1;
   let noOfFish = 1
   const expectedPenguins = [
    {
      name: 'A',
      hungry: false,
      flippers: 2,
      mammal: false
    }
  ];
  beforeEach(()=>{
   result =  petThePenguins(noOfPenguin,noOfFish)
  })
  test('One penguin with one fish will be fed', () => {
     expect(result).toStrictEqual(expectedPenguins)
    // Arrange

    // Act 

    // Assert
    // Hint: toStrictEqual the whole array
  })

 

 

})
describe('One penguin with no fish will be hungry',()=>{
  test('One penguin with no fish will be hungry', () => {
    // Arrange
    let result:any;
    let noOfPenguin = 1;
    let noOfFish = 0
    const expectedPenguins = [
     {
       name: 'A',
       hungry: true,
       flippers: 2,
       mammal: false
     }
   ];
    // Act 
       result = petThePenguins(noOfPenguin,noOfFish)
    // Assert
    expect(result).toStrictEqual(expectedPenguins)
    // Hint: toStrictEqual the whole array
  })
})

describe('And there are not enough fish', () => {
 
    test('At least one penguin will be hungry', () => {
      // Arrange
      const numberOfPenguins = 5; // Adjust the number of penguins as needed
      const numberOfFish = 3; // Adjust the number of fish as needed
  
      // Act
      const actualPenguins = petThePenguins(numberOfPenguins, numberOfFish);
  
      // Assert
      expect(actualPenguins.some(penguin => penguin.hungry === true)).toBe(true);
      // Explanation: Check if at least one penguin in the array has the hungry property set to true.
    });
  // Assert
    // Hint: expect.arrayContaining on one penguin
   
  });


