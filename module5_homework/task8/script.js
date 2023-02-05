
/*
Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х,
  значение — Y».*/

let myMap = new Map();

myMap.set('teacher', 'Elena')
.set('student 1', 'Ivan')
.set('student 2', 'Kate')
.set('student 3', 'Alex')

let result = myMap.forEach((value, key, map) => {
  console.log(`Ключ —  ${key},значение —  ${value}`);
});

console.log(result)
