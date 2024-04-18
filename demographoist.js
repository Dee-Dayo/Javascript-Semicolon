var obj1 = {
    name: "Dayo",
    population: 10,
    temp: 9,
    currency: "NG"
}

var obj2 = {
    name: "Beejay",
    population: 10,
    temp: 15,
    currency: "NG"
}
var obj3 = {
    name: "Moh",
    population: 10,
    temp: 9,
    currency: "NG"
}

var obj4 = {
    name: "Jay",
    population: 10,
    temp: 9,
    currency: "NG"
}

var obj5 = {
    name: "Chi",
    population: 10,
    temp: 9,
    currency: "NG"
}

var obj6 = {
    name: "Mesh",
    population: 10,
    temp: 22,
    currency: "NG"
}

var obj7 = {
    name: "Ik",
    population: 10,
    temp: 10,
    currency: "NG"
}

var obj8 = {
    name: "Ay",
    population: 10,
    temp: 11,
    currency: "NG"
}

var obj9 = {
    name: "Dayo",
    population: 10,
    temp: 8,
    currency: "NG"
}


let raw_array = [[null, obj1, obj2, obj3],[obj4, obj5, obj6, null],[obj7, null, obj8, obj9]]
var total = 0

for (const index in raw_array){
    for (const key in raw_array[index]){
        if (raw_array[index][key] == null){
            continue
        }
        if (raw_array[index][key].temp >= 10){
            total = total + raw_array[index][key].population
        }
    }
}

console.log(total)