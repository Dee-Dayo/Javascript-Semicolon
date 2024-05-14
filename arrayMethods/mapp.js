//Map means going through the array element each to alter their states

let array = [1, 2, 3, 4, 5, 6]

let answer = array.map((num) => num * 2)

console.log(answer)

let number = [1, 3, 4, 5, 6]
let answer2 = number.filter(num => num % 2 === 0).map(num => num * 10) // it filters d number dts divisible by 2, den map it by times by 10

console.log(answer2)