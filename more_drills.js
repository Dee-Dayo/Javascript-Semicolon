var left_operand = 2
var right_operand = 5
var operator = "-"

if (operator === "+") console.log(ans = left_operand + right_operand)
else if (operator === "-") console.log(ans = left_operand - right_operand)
else if (operator === "*") console.log(ans = left_operand * right_operand)
else if (operator === "/") console.log(ans = left_operand / right_operand)
else console.log(ans = NaN)



switch (operator) {
    case "-" : console.log(left_operand - right_operand)
        break
    case "+" : console.log(right_operand + left_operand)
        break
    case "/" : console.log(right_operand / left_operand)
        break
    default: console.log(NaN)
}