const clock = document.querySelector(".clock")


const tick = () => {
    const date = new Date
    clock.innerHTML = `
    <h2>${date.toLocaleTimeString()}</h2>
    `
}

setInterval(tick,1000)