function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("hours1").innerText = h;
    document.getElementById("hours2").innerText = h;
    document.getElementById("minutes1").innerText = m;
    document.getElementById("minutes2").innerText = m;
    document.getElementById("seconds1").innerText = s;
    document.getElementById("seconds2").innerText = s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}