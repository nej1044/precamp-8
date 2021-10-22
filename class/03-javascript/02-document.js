
function aaa() {
  // alert('안녕하세요!')
  
  document.getElementById('qqq').innerText = '반갑습니다'
}

function counter() {  
  const temp = Number(document.getElementById('count').innerText) + 1

  document.getElementById('count').innerText = temp
}

function changeColor() {
  document.getElementById('ccc').setAttribute('style', 'background-color: yellow')
}

function setDisabled() {
  document.getElementById('ddd').setAttribute('disabled', 'true')
}