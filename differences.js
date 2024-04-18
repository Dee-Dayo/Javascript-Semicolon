function lowest_common_factor(numbers){
    for (let divisor = 2; divisor <= 9; divisor++){
        let is_divisible = true;
        for (let count in numbers){
            if (numbers[count] % divisor !== 0){
                is_divisible = false;
                break;
            }
        }
        if (is_divisible === true) return divisor;
    }
}

let array = [6, 9, 12]

console.log(lowest_common_factor(array))

//
//
// let numberOne = [6, 9, 12];
// for (let divisor = 2; divisor <= 9; divisor++) {
//     let isDivisible = true;
//     for (let count = 0; count < numberOne.length; count++) {
//         if (numberOne[count] % divisor !== 0) {
//             isDivisible = false;
//             break;
//         }
//     }
//     if (isDivisible === true) {
//         console.log(divisor);
//     }
// }