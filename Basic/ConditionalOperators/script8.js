var carName = 'Ford'
var carYear = 2008
var currentYear = 2019
var carAge = currentYear - carYear

// если возраст машины меньше пяти лет ...
// если возраст машины больше или равно 5 лет 
// и меньше или равно 10 лет ...
// иначе другое сообщение

if (carAge < 5) {
    console.log(carName + ' младше 5 лет')
}

else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
}

else {
    console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам ')
}

// 0, null, undefined, '', NaN(Not a Number)  - false

// if (NaN) {
//     console.log('Значение true')
// }

// else {
//     console.log('Значение false')
// }

//4 ? console.log('Значение true') : console.log('Значение false')

var personAge = 20

var message = personAge < 18 ? 'Человек несовершеннолетний' : 'Человек совершеннолетний' // Тернарные операторы

console.log(message)