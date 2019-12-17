var person = {
    name: 'Max',
    age: 26,
    car: {
        model: 'Koenigsegg'
    },
    job: 'Front-End',
    friends: ['Elena', 'Igor']
}
var str = JSON.stringify(person)

console.log(str)
console.log(JSON.parse(str))