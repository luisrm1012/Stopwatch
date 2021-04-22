var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");
var s = "00"; //seconds
var m = "00"; //minutes
var h = "00"; //hours
var id;


function start() {
    s++;
    if (s < 10) {
        s = "0" + s;
    }
    if (s == 60) {
        s = "00";
        m++;
        if (m < 10) {
            m = "0" + m;
        }

    }
    if (m == 60) {
        m = "00";
        h++;
        if (h < 10) {
            h = "0" + h;
        }

    }

    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
};


startBtn.onclick = function() {
    id = setInterval(start, 1000);
    console.log(id)

};

stopBtn.onclick = function() {
    clearInterval(id);
    startBtn.innerHTML = "Continue";
};

resetBtn.onclick = function() {
    s = "00";
    m = "00";
    h = "00";
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    startBtn.innerHTML = "Start";
};