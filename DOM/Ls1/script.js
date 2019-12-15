// Работа с элементами

// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')
// var h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1) // старые варианты
// var div = document.querySelector('#playground')
// var p = document.querySelectorAll('.text')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')
// // var ul = document.querySelector('div#playground > div ul')
// div.innerHTML = '<h2 style="color: red;"> From JavaScript</h2>'
// h1.textContent = 'Changed from JS'
// console.log(input.value)
// console.log(div.innerHTML);
// console.log(p);
// console.log(h1.textContent)
// console.log(ul)
//---------------------------------------------------------

//Атрибуты

var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://ya.ru')
a.textContent = 'Yandex'

//console.log(a.attributes);


// Классы
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')

var hasClass = box2.classList.contains('blue')
console.log(hasClass)

if(hasClass) {
    box2.classList.remove('blue')
}else{
    box2.classList.add('blue')
}

