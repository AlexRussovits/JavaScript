/*
&& | true | false
true | true | false
false | false | false

|| | true | false
true | true | true
false | true | true

&& (и) - true если все значенния true
|| (или) - true если хоть одно значение true
! (нет) - инвертирует true или false
*/

console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!false)
console.log(!true)
console.log(!!true) // !!true => !false => true

console.log((false && true) || (true || false) || !true) 
// false || true || false => true