// let academyUsers:Object = {empno:1234,empname:"Thangaraj",age:11,salary:34567.77};


// const updateUsers = (users:Object) => {
//   var copy = { ...users }
//   for (const key in copy) {
//     copy[key].age = 21
//   }
//   return copy
// }

// const updatedUsers = updateUsers(academyUsers)
let academyUsers = { empno: 1234, empname: "Thangaraj", age: 11, salary: 34567.77 };

// Creating a new object and copying the properties of academyUsers
let anotherAcademyUser = { ...academyUsers };

// Updating the age property in the new object
anotherAcademyUser.age = 21;

console.log(anotherAcademyUser); // Output the updated object