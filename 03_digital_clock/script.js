const currentTime = document.getElementById('clock');

setInterval(() => {
    const currentDate = new Date();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    currentTime.innerHTML = `${hour} : ${minutes} : ${seconds}`
}, 1000);


// we are not using setTimeout here because setTimeout executes the code only once after the specified delay, while setInterval executes the code repeatedly at the specified interval.
