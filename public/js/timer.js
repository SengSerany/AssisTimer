let button = document.getElementById("timer");
let timeSetter = document.getElementById("setTime");

button.addEventListener("click", timerField);

function timerField() {

    timeSetter.innerHTML = ""
    

    let subtitleDiv = document.createElement("div");
    subtitleDiv.classList.add("subtitle");

    let newH2 = document.createElement("h2");
    let newTextH2 = document.createTextNode("Timer - En marche");
    newH2.appendChild(newTextH2);
    subtitleDiv.appendChild(newH2);

    let timeWatchDiv = document.createElement("div");
    timeWatchDiv.classList.add("timeWatch");

    let newP = document.createElement("p");
    let lineBreak = document.createElement("br");
    let newTextP = document.createTextNode(`00:00`);
    newP.appendChild(lineBreak);
    newP.appendChild(newTextP);

    timeWatchDiv.appendChild(newP);

    timeSetter
        .appendChild(subtitleDiv)
        .appendChild(timeWatchDiv);



};
