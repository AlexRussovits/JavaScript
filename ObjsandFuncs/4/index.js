var person = {
    name: 'Max',
    age: 21,
    job: 'Back-End'
}

// I varik
// for (var key in person) {
//     if (person.hasOwnProperty(key)) {
//     console.log(person[key])
//     }
// } 

// II varik

// var keys = Object.keys(person)

// console.log(keys)

// III varik

Object.keys(person).forEach(function (key) {
    console.log(person[key])
}) 