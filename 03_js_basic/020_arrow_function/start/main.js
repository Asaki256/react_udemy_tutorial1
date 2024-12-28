function fn(number) {
  return number * 2;
}


console.log(fn(3));
console.log(fn(6));

// const fnArrow = (number, number2) => {
//   return number * number2 * 10;
// }

const fnArrow = number => {
  number += 10;
  return number * 2;
}
const fnArrowObj = number => ({ result: number * 2 });

console.log(fnArrowObj(12));

console.log(fnArrow(40));
