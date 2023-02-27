setInterval(setClock, 1000)

let hourHand = document.querySelector('[data-hour-hand]')
let secondsHand = document.querySelector('[data-seconds-hand]')
let minuteHand = document.querySelector('[data-minute-hand]')

function setClock() {
    let currentDate = new Date()
    let secondsRatio = currentDate.getSeconds() / 60
    let minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60
    let hoursRatio = (minuteRatio + currentDate.getHours()) / 60
    
    setRotation(secondsHand, secondsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hoursRatio);
}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock()


