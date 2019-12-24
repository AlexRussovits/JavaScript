// Введение
// number,string,boolean,null,underfined
// object

// var cars = {
//     name: 'Lamborghini',
//     year: '2018'
// }

// cars.__proto__ => Object.prototype
// [] => Array => Object
// console.log(cars)

//----2 урок ----- 

var cars = {
    // ....
}

function Cars(name,year) {
    this.name = name
    this.year = year

}

Cars.prototype.getAge = function () {
    return new Date().getFullYear() - this.year
}

Cars.prototype.color = 'black'

var lamborghini = new Cars('Lamborghini', 2019)
var pagani = new Cars('Pagani', 2018)
console.log(lamborghini)
console.log(pagani)

