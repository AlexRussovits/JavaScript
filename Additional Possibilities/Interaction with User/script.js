document.querySelector('#alert').addEventListener('click', function() {
    alert('Вы успешно кликнули по кнопке')
})

document.querySelector('#confirm').addEventListener('click', function() {
    var decision = confirm('Вы уверены в том, что хотите нажать на кнопку?')
    
    if (decision) {
        alert('Вы успешно кликнули по кнопке')
    }
})

document.querySelector('#prompt').addEventListener('click', function() {
    var age = prompt('Введите свой возраст', 18)

    if (age >= 18) {
        alert('Вы можете пройти')
    } else {
        alert('Вы ещё слишком молоды')
    }
})

console.log('Console.log')
console.warn('Console.warn')
console.info('Console.info')
console.error('Console.error')

throw new Error('Error')