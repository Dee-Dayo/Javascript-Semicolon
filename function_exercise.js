// define function
function calc(x){
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
}
console.log(calc(3)(2));

// function expression
const calc2 = (x) =>{
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
}

console.log(calc2(3)(2));


// function as an arguement or call-back function
function higherOrderFunction(func){
    console.log("higher Function");
    func();
}
function lowerOrderFunction(){
    console.log("lower Function");
}

higherOrderFunction(lowerOrderFunction)


function greetings(greet){
    return function person(name) {
        return `Hello, ${name}. ${greet}`;
    }
}

console.log(greetings('Good morning')('John'));