/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/
export type Developer = {
    firstName: string, 
    lastName: string, 
    country: string, 
    continent: string, 
    age: number, 
    language: string
  }
  
  const developers = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
    { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
]
  // countFromEurope should return the number of developers who are from Europe.
  // For the list above it would return 1.
  export function countFromEurope (developers: Developer[]) {
    const EuropeUser = developers.filter((D) => D.country === "Europe") 
    console.log("the number of developer who are from Europe",EuropeUser)
    return EuropeUser.length;
  
  }
countFromEurope(developers)
  
  // getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
  // Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
  // For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
  export function getGreetings (developers: Developer[]) {
    developers.forEach((developer) => {
        return (`Hi ${developer.firstName} ,what do you like the most about ${developer.language}`)
       })
  
  }
getGreetings(developers)
  
  // isJSComing should return true if the array contains at least one developer whose language is Javascript.
  // For the list above it would return true.
