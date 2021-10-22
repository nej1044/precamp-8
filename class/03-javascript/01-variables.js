document.write(1+1)

let classmate = "철수"
console.log(classmate)

classmate = "영희"
console.log(classmate)

const aaa = 13 // "13" 은 문자열로 계산할 수 없음
console.log(aaa)

// aaa = 18
// console.log(aaa)

const myMoney = 10000  // camelCase

console.log(myMoney)

// token 
const token = String(Math.floor(Math.random()*1000000)).padStart(6, '0');

function getToken() {
  const token = String(Math.floor(Math.random()*1000000)).padStart(6, '0') 
console.log(token)
}