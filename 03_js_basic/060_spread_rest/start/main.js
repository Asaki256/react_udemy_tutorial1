// const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result = Math.max(...nums);
// console.log(result);


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1, 10, ...arr2];
// let newArr1 = newArr;
// newArr1.push(444);

// console.log(newArr1, newArr);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = 'John';

console.log(obj, newObj);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, x, ...argB) => {
  console.log(n);
  console.log(x);
  console.log(argB);
}
restB('test', 1, 3, 4, 5, 6)
