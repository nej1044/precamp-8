setTimeout(function () {
  console.log('시간지연함수입니다')
}, 2000) // ms 기준
//  2
//  VM1572:2 시간지연함수입니다
setTimeout(function () {
  console.log('시간지연함수입니다')
}, 2000) // ms 기준
//  3
//  VM1575:2 시간지연함수입니다
setInterval(function () {
  console.log('반복')
}, 1000)
//  4
//  44VM1683:2 반복

let time = 10

setInterval(function () {
  if (time >= 0) {
    console.log(time)
    time = time - 1
  }
}, 1000)
// 2
// VM2269:5 10
// VM2269:5 9
// VM2269:5 8
// VM2269:5 7
// VM2269:5 6
// VM2269:5 5
// VM2269:5 4
// VM2269:5 3
// VM2269:5 2
// VM2269:5 1
// VM2269:5 0

let time = 180

setInterval(function () {
  if (time >= 0) {
    const minutes = Math.floor(time / 60)
    const secends = String(time % 60).padStart(2, '0')
    document.getElementById('timer').innerText = minutes + ':' +secends
    time = time - 1
  }
}, 1000)