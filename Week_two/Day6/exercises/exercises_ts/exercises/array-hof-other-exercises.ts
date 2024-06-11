// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}


// Reduce the array to only the total age in months of all the doggie Academites
// TODO
const totalage =someAcademitesWithAges.reduce((total:number,academite:Academite) =>{
  return total+academite.age
},0)
console.log(totalage)

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName = someAcademitesWithAges.sort((a:Academite,b:Academite) =>  a.name.localeCompare(b.name))

console.log(sortByName)
// TODO
const sortByAges = someAcademitesWithAges.sort((a:Academite,b:Academite) => b.age -a.age)

console.log(sortByAges)
// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it

// TODO


// EOF
