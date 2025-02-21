// function showMessage (from, text){
//     console.log(`${from}, ${text}`)
// }
// setTimeout(showMessage, 3000, 'hi', 'Madi')


// function showMessage (from, text){
//          console.log(`${from}, ${text}`)
//      }
//     setInterval(showMessage, 1000, 'hi', 'Madi')


// function showMessage (num){
//           console.log(num);
//           if (num < 10){
//             setTimeout(showMessage, 1000, ++num )
//           }
//         }
//         setTimeout(showMessage, 1000, 1 )




//  function shownumber(num){
//      console.log(num);
//     let timeId = setTimeout(shownumber, 1000, ++num);
//      if (num === 10){
//         clearTimeout(timeId)
//      }
//  }
//  setTimeout(shownumber,1000,1)  // timer
          
     

    // *******
  ``

    function updateTimer(){
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const seconds = String(now.getSeconds()).padStart(2, '0')
    
        document.getElementById("hours").textContent= hours;
        document.getElementById("minutes").textContent= minutes;
        document.getElementById("seconds").textContent= seconds;
    
    }
    setInterval(updateTimer, 1000);
    updateTimer();