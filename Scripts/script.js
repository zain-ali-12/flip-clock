function changeFormat(current) {
    time = parseInt(document.getElementById("hours3").innerText);
    console.log(time);
    if (current === "24 HOUR") {
        if (time > 12) {
            document.getElementById("format").innerText = "PM";
            return time - 12;
        } else {
            if (time == 0) {
                document.getElementById("format").innerText = "AM";
                return 12
            } else {
                document.getElementById("format").innerText = "AM";
                return time
            }
        }
    } else {
        document.getElementById("format").innerText = "24 HOUR";
        return time
    }
}

function checkFormat(time) {
    time = parseInt(time)
    if (document.getElementById("format").innerText != "24 HOUR"){
        return time
    } else {
        if (time > 12){
            return time - 12
        } else {
            if (time == 0){
                return 12
            } else {
                return time
            }
        }
    }
}

function startHours() {
    let today = new Date();
    let h = today.getHours();
    h = checkFormat(h)
    h = checkTime(h);
    document.getElementById("hours1").innerText = h;
    document.getElementById("hours2").innerText = h;
    document.getElementById("hours3").innerText = h;
    document.getElementById("hours4").innerText = h;

    document.getElementById("hours1").parentElement.style.animation = "flip 0.45s";
    document.getElementById("hours1").parentElement.addEventListener('animationend', () => {
        document.getElementById("hours1").parentElement.style.animation = "";
    })

    document.getElementById("hours2").style.animation = "flip1 0.45s";
    document.getElementById("hours2").style.animationDelay = "0.45s";
    document.getElementById("hours2").addEventListener('animationend', () => {
        document.getElementById("hours2").style.animation = "";
    })

    document.getElementById("format").style.animation = "flip1 0.45s";
    document.getElementById("format").style.animationDelay = "0.45s";
    document.getElementById("format").addEventListener('animationend', () => {
        document.getElementById("format").style.animation = "";
    })
}

function startMinutes() {
    let today = new Date();
    let m = today.getMinutes();
    if (m == 0) {
        startHours()
    }
    m = checkTime(m);
    document.getElementById("minutes1").innerText = m;
    document.getElementById("minutes2").innerText = m;
    document.getElementById("minutes3").innerText = m;
    document.getElementById("minutes4").innerText = m;

    document.getElementById("minutes1").style.animation = "flip 0.45s";
    document.getElementById("minutes1").addEventListener('animationend', () => {
        document.getElementById("minutes1").style.animation = "";
    })

    document.getElementById("minutes2").style.animation = "flip1 0.45s";
    document.getElementById("minutes2").style.animationDelay = "0.45s";
    document.getElementById("minutes2").addEventListener('animationend', () => {
        document.getElementById("minutes2").style.animation = "";
    })

}

let started = false

function startSeconds() {
    let today = new Date();
    let s = today.getSeconds();
    if (s == 0) {
        startMinutes()
    } else {
        if (started == false) {
            startMinutes();
            startHours();
            started = true;
        }
    }
    s = checkTime(s);
    document.getElementById("seconds1").innerText = s;
    document.getElementById("seconds2").innerText = s;
    document.getElementById("seconds3").innerText = s;
    // document.getElementById("seconds4").innerText = s;

    document.getElementById("seconds1").style.animation = "flip 0.45s";
    document.getElementById("seconds1").addEventListener('animationend', () => {
        document.getElementById("seconds1").style.animation = "";
    })

    document.getElementById("seconds2").style.animation = "flip1 0.45s";
    document.getElementById("seconds2").style.animationDelay = "0.45s";
    document.getElementById("seconds2").addEventListener('animationend', () => {
        document.getElementById("seconds2").style.animation = "";
    })
    setTimeout(startSeconds, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
