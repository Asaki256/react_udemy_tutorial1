// 三項演算子（ ? : ）

const a = true;
let resultA;

if (a) {
  resultA = "trueだよ";
} else {
  resultA = "falseだよ";
}
console.log(resultA);

let result2 = a ? 'trueだ。' : 'falseだ';
console.log(result2)

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());
