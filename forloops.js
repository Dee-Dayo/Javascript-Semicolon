let user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    password: 'password',
    age: "106",
    sex: "male"
}

// for (const key in user) {
//     console.log(user[key])
// }


let array = [1, 4, 3, 2, 5]

for (const index in array) {
    console.log(array[index])
}

for (const value of array){
    console.log(value)
}
