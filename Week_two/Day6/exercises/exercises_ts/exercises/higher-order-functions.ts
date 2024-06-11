/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', 
        age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 
        'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', 
        continent: 'Americas', age: 23, language: 'Python' }
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


// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
export function countFromEurope (developers: Developer[]) {
  const europeDev = developers.filter(developers => developers.continent ==='Europe')
  return europeDev.length;

}

// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
export function getGreetings (developers: Developer[]) {

}

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing (developers: Developer[]) {

}

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'
export function getFirstPythonDeveloper (developers: Developer[]) {
  const pythonDev = developers.filter(developers => developers.language === 'Python');
  const firstPythonDev = pythonDev[0]
  if(firstPythonDev){
 
       return (` ${firstPythonDev.firstName} , ${firstPythonDev.country}`)
 
  }
  else{
    return 'none'
  }
}

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
export function getAverageAge(developers: Developer[]) {
if(developers.length === 0)
{
  return -1;
}
const totalAge = developers.reduce((sum,developers)=> sum+developers.age,0);
const averageAge = totalAge/developers.length;
return Math.floor(averageAge);

}

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
export function getLanguageCounts (developers: Developer[]) {
const langCount :{[language:string]:number} ={};
for(const developer of developers)
{
  const language = developer.language;
  if(langCount[language]){
    langCount[language]++;
   }else{
    langCount[language]=1;
   }
}
 return langCount;
}

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest (developers: Developer[]) {
  if (developers.length === 0){
    return[];
  }
  const maxAge = Math.max(...developers.map(developers => developers.age));
  const oldestDev = developers.filter(developers => developers.age ===maxAge);
  const oldestDevName = oldestDev.map(developers => `${developers.firstName}`);
   return oldestDevName;

}

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup (developers: Developer[]) {
  

}
