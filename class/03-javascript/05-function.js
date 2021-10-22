      // function getToken() {
      //   const token = String(Math.floor(Math.random()*1000000)).padStart(6, '0') 
      //   document.getElementById('tokenNumber').innerText = token
      // }

      const getToken = () => {
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
        document.getElementById('tokenNumber').innerText = token

        let time = 10

        setInterval(function () {
          if (time >= 0) {
            document.getElementById('timer').innerText = time
            time = time - 1
          }
        }, 1000)
      }

      // 함수 작성 방식(화살표함수)
      // const hello=()=> {
      //alert();
      //}