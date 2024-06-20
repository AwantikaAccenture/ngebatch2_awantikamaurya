import { addToArray } from './animal-array'

/*
Run with
> npm install
> npm test animal-array
*/

//Tasks
// - Make every test in the first describe have the item 'Early Bird' at the start of the array
// - Make sure the array is empty after each test

//This is a test that shows you how the function works and can be tested
// it('I can add an item to an existing array', () => {
//   //ARRANGE
//   const animalArray: string[] = []
//   const itemToAdd = 'Timely Hippo'
//   const expectedResult = ['Timely Hippo']

//   //ACT
//   const result = addToArray(animalArray, itemToAdd)

//   //ASSERT
//   expect(result).toEqual(expectedResult)
// })

describe('Every test has early bird at the start of the array', () => {

  //ARRANGE
  let animalArray1:string[] = []
  let itemToAdd = 'Early Bird'
  let expectedResult = ['Early Bird','Timely Hippo']
  
  let result:string[]=[]
  
  //ACT
  beforeEach(() => {
     addToArray(animalArray1, itemToAdd);
     let moreItem ='Timely Hippo'
     result =addToArray(animalArray1,moreItem)
     console.log(result);
     

  })
//ASSERT
  it('Adds the item Timely Hippo to an existing array that has Early Bird in it', () => {
    expect(result).toEqual(expectedResult)
   
  })
  


})
 describe('Add Timely Hippo and Regular Rat to an existing array that has Early Bird in it',() => {

  //ARRANGE
  let animalArray2:string[] = ['Early Bird']
  let expectedResult1 = ['Early Bird','Timely Hippo','Regular Rat']
  let moreItem ='Timely Hippo'
  let result1:string[]=[]
 
  //ACT
  beforeEach(() => {
     console.log("array",animalArray2)
     addToArray(animalArray2, moreItem);
     let addOnemore = 'Regular Rat'
     result1 =addToArray(animalArray2,addOnemore)
     console.log(result1);
     

  })
//ASSERT
  it('Adds the item Timely Hippo to an existing array that has Early Bird in it', () => {
    
   expect(result1).toEqual(expectedResult1)
  }) 

 })
