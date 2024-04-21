let {addNumbers, evenNumbers, studentGrades, highestProduct} = require("./functions.js");

test("Add two numbers", ()=>{
    let a = 3;
    let b = 5;
    let answer = addNumbers(a, b);

    expect(answer).toBe(8);
})

test("Filter even numbers", ()=>{
    let arr = [1,2,3,4,5,6];
    let answer = evenNumbers(arr);

    expect(answer).toEqual([2, 4, 6])
})

test("Get Student grades",()=>{
    let studentScores = [95, 78, 85, 60, 45, 92]
    let answer = studentGrades(studentScores);

    expect(answer).toEqual(["A", "C", "B", "D", "F", "A"])
})

test("Get Highest product", ()=>{
    let scores = [1, 5, 10, 4, 0]
    let answer = highestProduct(scores)
    expect(answer).toBe(50)
})