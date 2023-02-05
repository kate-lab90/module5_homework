
/*

Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
  Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в
массиве одинаковые.*/

let arr = [5, 6, 9, 0, 88, 12, 42, 6, 7]

for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[0]){
    console.log(false)
  } else console.log(true)
}

// вариант 2
//
// let arr = ['Mark', 'Melissa', 'Mark'];
//
// let uniqArr;
//
// function uniq(arr){
//   uniqArr = Array.from(new Set(arr));
// }
//
// uniq(arr)
//
// console.log(uniqArr)
//
// if (uniqArr.length === 1){
//   console.log(true)
// } else {console.log(false)}



