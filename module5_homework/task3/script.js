
/*
Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

*/

function newString(str) {
  return str.split('').reverse().join('')
}

console.log(newString('hello'))
