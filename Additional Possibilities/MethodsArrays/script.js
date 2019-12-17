var str = '1,2,3,5,6,7,8'
var arr = str.split(',')
//console.log(arr.join(';'))
//console.log(arr.reverse())
arr.splice(1,2,'11')
var newArr = arr.concat([1,2])
// console.log(newArr)
var objArr = [
    {name: 'Max', age:27},
    {name: 'Elena', age:18},
    {name: 'Victor', age:20}
]

var foundPerson = objArr.find(function(person){
   return person.age === 20
})

// console.log(foundPerson)

var oddArr = [1,2,3,4,5,6,7,8,9].filter(function(i){
    return i % 2  !== 0
})
//console.log(oddArr)

var intArr = arr.map(function(i){
    return i * 2
})
console.log(intArr)