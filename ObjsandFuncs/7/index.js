function printObject(objName) {
    console.log('Printing object:', objName)
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            console.log('[' + key + ']', this[key])
        }
    }
}




var person = {
    firstName: 'Rob',
    job: 'Programer',
    age: 26,
    friends: ['Aly', 'Sam']
}

var car = {
    name: 'Subaru',
    model: 'Impreza',
    year: 2018
}


var printPerson = printObject.bind(person)
printPerson('Person')
printObject.call(car, 'Car')

printObject.apply(person, ['Person'])