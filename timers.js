window.addEventListener('DOMContentLoaded', function () {
  function stopWatch () {
  // Creating variables for button elements & display
    var startButt = document.getElementById('start')
    var pauseButt = document.getElementById('pause')
    var resetButt = document.getElementById('reset')
    var timeDisplay = document.getElementById('timer')

  // Creating time & count variables
    var seconds = 0
    var timerId
    var clickCount = 0

  // Function that increments seconds counter
    function updateTimer () {
      timeDisplay.textContent = 'Time elapsed: ' + seconds
      seconds += 1
    }

// Click event handler for buttons
    startButt.addEventListener('click', function () {
    // This if-statement prevents seconds count from accelerating when start button pressed repeatedly
      if (clickCount === 0) {
        timerId = setInterval(updateTimer, 1000)
        clickCount++
      }
    })

    pauseButt.addEventListener('click', function () {
      clearInterval(timerId)
      clickCount = 0
    })

    resetButt.addEventListener('click', function () {
      clearInterval(timerId)
      seconds = 0
      clickCount = 0
      timeDisplay.textContent = 'Stop Watch'
    })

    return {
      updateTimer: updateTimer
    }
  }
  var myStopWatch = stopWatch()
})
