//Arrange
let newcourse:any =[];

//ACT
beforeEach(()=>{
    newcourse =['Angular'];
});

describe('array testing',()=>{
    beforeEach(()=> {
        newcourse.push('NextJS')
    })



it('yo test an array',()=>{
  // expect(newcourse).toStrictEqual(['Angular'])
  expect(newcourse).toEqual(['Angular','NextJS']);
  console.log(newcourse);
})
  
})