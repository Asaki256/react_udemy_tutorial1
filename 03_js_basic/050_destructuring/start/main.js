// const [a, ...rest] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(rest);


// const { v, y, z } = { v: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(v);
// console.log(z);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", c: "Shinjuku" };

const fnArr = ([aa, bb, cc]) => {
  console.log("---配列---");
  console.log(`country: ${aa}`);
  console.log(`state: ${cc}`);
  console.log(`city: ${bb}`);
};

const fnObj = ({ country, state, c }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${c}`);
};

fnArr(arr);
fnObj(objAddress);
