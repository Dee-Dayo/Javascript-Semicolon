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

function addOneToLastIndex(numbers){
    for(let index = numbers.length-1; index >= 0; index--){
        if (numbers[index]>=9){
            numbers[index]= 0
        } else {
            numbers[index] = numbers[index] + 1
            break
        }
    }
    if(numbers[0] === 0) numbers.unshift(1)


    return numbers
}

function highestOccurringNumber(numbers) {
    let countMap = {};
    let maxCount = 0;
    let maxElement = numbers[0];

    numbers.forEach(element => {
        countMap[element] = (countMap[element] || 0) + 1;
        if (countMap[element] > maxCount) {
            maxCount = countMap[element];
            maxElement = element;
        }
    });
    return maxElement;

    function numberOfOccurringTimes(numbers) {
        let result = {}
        for (let count1 = 0; count < numbers.length; count1++) {
            var count = 0;
            for (let count2 = 0; count2 < numbers.length; count2++) {
                if (numbers[count1] === numbers[count2]) count++;
            }
            result[numbers[count1]] = count;
        }

        return result;
    }
}


module.exports = {addNumbers, evenNumbers, studentGrades, highestProduct, addOneToLastIndex, numberOfOccurringTimes, highestOccurringNumber: highestOccurringNumber};