let {
    addNumbers,
    evenNumbers,
    studentGrades,
    highestProduct,
    addOneToLastIndex,
    highestOccurringNumber,
    numberOfOccurringTimes
} = require("./functions.js");

test("Add two numbers", () => {
    let a = 3;
    let b = 5;
    let answer = addNumbers(a, b);

    expect(answer).toBe(8);
})

test("Filter even numbers", () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let answer = evenNumbers(arr);

    expect(answer).toEqual([2, 4, 6])
})

test("Get Student grades", () => {
    let studentScores = [95, 78, 85, 60, 45, 92]
    let answer = studentGrades(studentScores);

    expect(answer).toEqual(["A", "C", "B", "D", "F", "A"])
})

test("Get Highest product", () => {
    let scores = [1, 5, 10, 4, 0]
    let answer = highestProduct(scores)
    expect(answer).toBe(50)
})

test("Test function works", () => {
    let numbers = [5, 2, 3, 1, 2]
    let answer = addOneToLastIndex(numbers)
    expect(answer).toEqual([5, 2, 3, 1, 3])
})

test("Test function works", () => {
    let numbers = [2, 4, 0, 9, 9]
    let answer = addOneToLastIndex(numbers)
    expect(answer).toEqual([2, 4, 1, 0, 0])
})

test("Test function works", () => {
    let numbers = [9, 9, 9, 9]
    let answer = addOneToLastIndex(numbers)
    expect(answer).toEqual([1, 0, 0, 0, 0])
})

test("Function returns highest occurring number", () => {
    let numbers = [1, 1, 2, 2, 2, 1, 4, 5, 6]
    let answer = highestOccurringNumber(numbers)

    expect(answer).toEqual(2)
})

test("return number of occurring times", ()=>{
    let actual = [1, 2, 2, 1, 3];
    let answer = numberOfOccurringTimes(actual);

    expect(answer).toEqual({'1': 2, '2':2, '3':1});
})