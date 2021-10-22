// 첫번째 phone 입력 시 두번째 focus 이동
function changePhone1() {
  const phone1 = document.getElementById('phone1').value
  if (phone1.length === 3) {
    document.getElementById('phone2').focus()
  }
}

// 두번째 phone 입력 시 세번째 focus 이동
function changePhone2() {
  const phone2 = document.getElementById('phone2').value
  if (phone2.length === 4) {
    document.getElementById('phone3').focus()
  }
}

// 세번쨰 phone 입력 시 인증번호 전송버튼 활성화
function changePhone3() {
  const phone3 = document.getElementById('phone3').value
  if (phone3.length === 4) {
    document.getElementById('getToken__btn').disabled = false
    document.getElementById('getToken__btn').style = 'background-color: yellow; cursor: pointer;'
  }
}

// 인증번호 전송 시 토큰 생성, 타이머버튼 활성화
let btnActive = false;

function getToken() {
  if (btnActive === false) {
    btnActive = true;

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
    document.getElementById('tokenNumber').innerText = token
    document.getElementById('timer__btn').disabled = false
    document.getElementById('timer__btn').style = 'background-color: yellow; cursor: pointer;'

    let time = 180

    setInterval(function () {
      if (time >= 0) {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0')
        const secends = String(time % 60).padStart(2, '0')
        document.getElementById('timeOut').innerText = minutes + ':' + secends
        time = time - 1
      }
    }, 1000)
  }
}

// time이 0이되면 토큰, 타이머 초기화
if (time === 0) {
  btnActive = false
  time = 180
  document.getElementById('tokenNumber').innerText = '000000'
  document.getElementById('timer__btn').disabled = true
  document.getElementById('timer__btn').style = 'background-color: none; cursor: none;'
  document.getElementById('timeOut').innerText = '03:00'
}

// 인증완료 클릭 시 인증완료 알림, 가입버튼 활성화
// (수정) 인증완료 클릭 시 타이머 초기화 안됌
function checkAuth() {
  time = 180
  document.getElementById('timeOut').innerText = '03:00'

  alert('인증이 완료되었습니다.')
  document.getElementById('signup__footer').disabled = false
  document.getElementById('signup__footer').style = 'background-color: yellow; cursor: pointer;'
}

// 가입버튼을 누르면 이메일, 이름, 비밀번호1, 비밀번호2, 검증-에러메세지

function validation() {
  const email = document.getElementById('email').value
  const name = document.getElementById('name').value
  const password1 = document.getElementById('password1').value
  const password2 = document.getElementById('password2').value
  if (email !== '' && password1 !== '' && password2 !== '' && name !== '') {
    document.getElementById('gendererror').style = 'display: block;'
  }
}