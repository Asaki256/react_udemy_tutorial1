// 非同期処理
// Promise

let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 2000);
}).then((b) => {
  console.log(b)
  return b;
}).then((b) => {
  console.log(b)
  return b;
}).then((b) => {
  console.log(b)
  return b;
}).catch((e) => {
  console.log('catch', e)
})

// setTimeout(() => {
//   a = 1;
//   console.log(a);
// }, 2000);

