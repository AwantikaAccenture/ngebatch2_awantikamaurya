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
  
//   const developers = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
//     { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
// ]
  // countFromEurope should return the number of developers who are from Europe.
  // For the list above it would return 1.
  export function countFromEurope (developers: Developer[]) {
    const EuropeUser = developers.filter((D) => D.country === "Europe") 
    console.log("the number of developer who are from Europe",EuropeUser)
    return EuropeUser.length;
  
  }
 // countFromEurope(developers)
  
  // getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
  // Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
  // For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
  export function getGreetings (developers: Developer[]) {
    developers.forEach((developer) => {
        return (`Hi ${developer.firstName} ,what do you like the most about ${developer.language}`)
       })
  
  }
  //getGreetings(developers)
  
  // isJSComing should return true if the array contains at least one developer whose language is Javascript.
  // For the list above it would return true.
  export function isJSComing (developers: Developer[]) {
    const JSUser = developers.filter((D) => D.language === "Javascript") 
   // console.log("JavaScript Developer :",JSUser)
    return JSUser;
  
  }
//isJSComing(developers);
  // getFirstPythonDeveloper should return the first developer in the array whose language is Python
  // You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
  // For the list above, it would return 'Aisha, Croatia'
  export function getFirstPythonDeveloper (developers: Developer[]) {
    const PythonUser = developers.filter((D) => D.language === "Python") 
    PythonUser.forEach((developer) => {
       // console.log(` ${developer.firstName} , ${developer.country}`);
          return (` ${developer.firstName} , ${developer.country}`)
       })
 //  return PythonUser.;
  }
  //getFirstPythonDeveloper(developers)
  // getAverageAge should return the average age of the developers (rounded down).
  // If there are no developers, return -1
  // For the list above, it would return 30.
  export function getAverageAge(developers: Developer[]) {
    var totalAge = 0
    developers.forEach((developer) => {
        totalAge += developer.age            
       })

    return Math.round(totalAge/developers.length)
  }
  
 // console.log(getAverageAge(developers))
  // getLanguageCounts should return an object representing how many developers of each language there are.
  // For the list above, it would return { Javascript: 1, Python: 2 }
  // NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
  export function getLanguageCounts (developers: Developer[]) {
    const JSUser = developers.filter((D) => D.language === "Javascript") 
    console.log("JavaScript Developer :",JSUser.length)
    const PythonUser = developers.filter((D) => D.language === "Python") 
    console.log("Python Developer :",PythonUser.length)
    
    const NBUser = developers.filter((D) => D.language !== "Python" || "JavaScript") 
    console.log("NBUser :",NBUser.length)
    // developers.forEach((developer) => {
    //     totalAge += developer.age            
    //    })
  }
 // getLanguageCounts(developers)
  // getOldest should return an array which includes the name of the developer who is the oldest.
  // In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
  // For the list above, it would return ['Aisha']
  export function getOldest (developers: Developer[]) {
    var oldest_dev:any;
    var oldest_age = 0;
    developers.forEach((developer,index) => {
        if(developer.age>=oldest_age) 
        {
            oldest_age = developer.age;
            oldest_dev = developer.firstName;
        }
         

       })
       console.log(oldest_dev);

  
  }
  //getOldest(developers);
  
  // isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
  // 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  // For the list above, it would return false
  export function isGlobalGroup (developers: Developer[]) {
    const NBUser = developers.filter((D) => D.continent !== "Africa" || "Americas" || "Asia" || "Europe" || "Oceania") 
    console.log("NBUser :",NBUser.length)
  }
 // isGlobalGroup(developers);