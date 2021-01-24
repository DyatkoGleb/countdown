// January, February, March, April, May, June, July, August, September, October, November, December
let deadline = "January 26 2021 00:00:00 GMT+0300",
    daysSpan = document.getElementById('day-counter'),
    hoursSpan = document.getElementById('hour-counter'),
    minutesSpan = document.getElementById('min-counter'),
    secondsSpan = document.getElementById('sec-counter'),
    timeinterval


window.onload = () => {
    updateClock(deadline)

    timeinterval = setInterval(() => {updateClock(deadline)}, 1000)
}


function updateClock(endtime) {
    let timeDifference = Date.parse(endtime) - Date.parse(new Date())

    timeDifference = {
        'total': timeDifference,
        'days': Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((timeDifference / 1000 / 60) % 60),
        'seconds': Math.floor((timeDifference / 1000) % 60)
    }

    daysSpan.innerHTML = timeDifference.days
    hoursSpan.innerHTML = ('0' + timeDifference.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + timeDifference.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + timeDifference.seconds).slice(-2)

    if (timeDifference.total <= 0) {
        clearInterval(timeinterval)
        daysSpan.innerHTML = '00'
        hoursSpan.innerHTML = '00'
        minutesSpan.innerHTML = '00'
        secondsSpan.innerHTML = '00'
    }
}
