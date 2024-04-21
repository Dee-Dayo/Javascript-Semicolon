function addNumbers(x, y){
    return x + y;
}

function evenNumbers(numbers){
    return numbers.filter(number => number % 2 === 0);
}


function studentGrades(scores){
    let grade = []

    scores.map(score => {
    if (score > 89)
        grade.push("A")
        else if (score > 79)
            grade.push("B")
        else if (score > 69)
            grade.push("C")
        else if (score > 59)
            grade.push("D")
        else
            grade.push("F")
    })
    return grade
}

function highestProduct(numbers) {
        if (numbers.length === 0) return 0;
        if (numbers.length===1) return numbers[0];

        let product = Number.MIN_SAFE_INTEGER;
        for (const row in numbers) {
            for (const column in numbers) {
                const answer = numbers[row] * numbers[column];
                if (row === column) continue;
                console.log(answer)
                if (answer > product) product = answer;
            }
        }
        return product;
    }

function arrangeZeroAtTheEnd(numbers){
    
}

module.exports = {addNumbers, evenNumbers, studentGrades, highestProduct};