      // function getToken() {
      //   const token = String(Math.floor(Math.random()*1000000)).padStart(6, '0') 
      //   document.getElementById('tokenNumber').innerText = token
      // }
      let btnActive = false;

      const getToken = () => {
        if (btnActive === false) {
          btnActive = true;

          const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
          document.getElementById('tokenNumber').innerText = token

          let time = 180

          setInterval(function () {
            if (time >= 0) {
              const minutes = String(Math.floor(time / 60)).padStart(2, '0')
              const secends = String(time % 60).padStart(2, '0')
              document.getElementById('timer').innerText = minutes + ':' + secends
              time = time - 1
            }
          }, 1000)
        }
      }

      if (time ===0) {
        btnActive = false
      }

      // 함수 작성 방식(화살표함수)
      // const hello=()=> {
      //alert();
      //}