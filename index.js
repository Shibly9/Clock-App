// let hour = document.getElementById('hour')
// let minute = document.getElementById('minute')
// let second = document.getElementById('second')

setInterval(() => {
    let date = new Date();
    let hTime = date.getHours();
    let mTime = date.getMinutes();
    let sTime = date.getSeconds();
    hRotate = (30*hTime)+(mTime/2)+(sTime/120);
    mRotate = (6*mTime+sTime/10)
    sRotate = (6*sTime)

    hour.style.transform = `rotate(${hRotate}deg)`
    minute.style.transform = `rotate(${mRotate}deg)`
    second.style.transform = `rotate(${sRotate}deg)`
}, 1000);