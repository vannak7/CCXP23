const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const lancamento = "11 jan 2023"

function countDown() {
    const dataLanc = new Date(lancamento)
    const today = new Date()

    const secTotal = (dataLanc - today)/1000;

    const finalDays = Math.floor(secTotal / 60 / 60 / 24);
    const finalHour = Math.floor(secTotal / 60 / 60) % 24;
    const finalMinutes = Math.floor(secTotal / 60) % 60;
    const finalSeconds = Math.floor(secTotal) % 60;

    day.innerHTML = `${timeFormat(finalDays)}D`
    hour.innerHTML = `${timeFormat(finalHour)}H`
    minute.innerHTML = `${timeFormat(finalMinutes)}M`
    second.innerHTML = `${timeFormat(finalSeconds)}S`

}

function timeFormat (time) {
    return time < 10? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000)



function msg() {
    window.alert('Estou feliz que você chegou aqui!')
}

function msgen() {
    window.alert('I am glad you got here!')
}

function msges() {
    window.alert('¡Me alegro de que hayas llegado hasta aquí!')
}

