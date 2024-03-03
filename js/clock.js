const clock = document.querySelector("h2#clock");

function getClock() {
    
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hour} : ${minute} : ${second}`
}

    getClock()
    setInterval(getClock, 1000);

    /* if(date.getHours()<10 && date.getMinutes()<10 && date.getSeconds()<10) {
    clock.innerText =`0${date.getHours()} : 0${date.getMinutes()} : 0${date.getSeconds()}`

} else if (date.getHours()<10 && date.getMinutes()<10) {
    clock.innerText =`0${date.getHours()} : 0${date.getMinutes()} : ${date.getSeconds()}`

} else if (date.getHours()<10 && date.getSeconds()<10) {
    clock.innerText =`0${date.getHours()} : ${date.getMinutes()} : 0${date.getSeconds()}`

} else if (date.getMinutes()<10 && date.getSeconds()<10) {
    clock.innerText =`${date.getHours()} : 0${date.getMinutes()} : 0${date.getSeconds()}`

} else if (date.getSeconds()<10) {
    clock.innerText =`${date.getHours()} : ${date.getMinutes()} : 0${date.getSeconds()}`

} else if    (date.getMinutes()<10) {
        clock.innerText =`${date.getHours()} : 0${date.getMinutes()} : ${date.getSeconds()}`

    } else if        (date.getHours()<10) {
            clock.innerText =`0${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    } else {
        clock.innerText =`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    }
}*/


/*if문 없이
초단위 앞에 01 02 03 .... 으로
나타나게 하는 코드 한줄로 작성해보았습니다.

const Seconds = ("00"+ (date.getSeconds()).toString()).slice(-2);*/