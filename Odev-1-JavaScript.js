let name = prompt("İsminizi Girer Misiniz? :)")
let info = document.querySelector("#info")

info.innerHTML = name

var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var seconds = document.querySelector("#seconds");

var clock = setInterval(
    function time(){
        var dateNow = new Date();
        var hr = dateNow.getHours();
        var min = dateNow.getMinutes();
        var sec = dateNow.getSeconds();

        if(hr < 10){
            hr = "0" + hr;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }

        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;
        },1000
    );