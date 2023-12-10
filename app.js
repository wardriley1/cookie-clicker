var cookies = 0;

function cookie_clicked(){
    cookies++;
    document.querySelector("#cookies").innerHTML = "You have "+cookies+" cookies";
    localStorage.setItem("localcounter", cookies);
}

setInterval(function () {
    cookies = cookies + 1;
    console.log("🍪", cookies);
    document.querySelector("#cookies").innerHTML = "You have "+cookies+" cookies";
    localStorage.setItem("counter", cookies);
}, 1000);
console.log(localStorage);

function loadCookies() {
    const localcounter = localStorage.getItem("localcounter");
    counter.textcontent = localcounter;
    console.log(localcounter)
}

loadCookies()
