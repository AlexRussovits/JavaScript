var carName = 'Ford'
var carYear = 2012
var personYear = 1996

function Age(year) {
    var currentYear = 2019
    var result = currentYear - year
    return result
}

function checkLogAge(year) {
    if (Age(year) < 10) {
        console.log('Возраст меньше 10 лет')
    }   else{
        console.log('Возраст больше 10 лет')
    }
}

checkLogAge(carYear)
checkLogAge(personYear)

// Способы создания функций

sayHelloTo('Николай')

// var sayHelloTo = function (name) {
//     console.log('Привет, ' + name)
// }

 function sayHelloTo(name) {
    console.log('Привет, ' + name)
}