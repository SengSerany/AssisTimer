let button = document.getElementById("timer");
let timeSetter = document.getElementById("setTime");

button.addEventListener("click", timerField);

function timerField() {

    timeSetter.innerHTML = "";

    let subtitleDiv = document.createElement("div");
    subtitleDiv.classList.add("subtitle");

    let newH2 = document.createElement("h2");
    let newTextH2 = document.createTextNode("Timer - En marche");
    newH2.appendChild(newTextH2);
    subtitleDiv.appendChild(newH2);

    let timeWatchDiv = document.createElement("div");
    timeWatchDiv.classList.add("timeWatch");

    let newP = document.createElement("p");
    newP.setAttribute("id", "timer")
    let lineBreak = document.createElement("br");

    newP.appendChild(lineBreak);
    
    let second = 00;
    let minute = 00;

    function setTimer(){
        
        let counter = window.setInterval(() => {
            
            if (minute == 25 && second == 1 ){
                clearInterval(counter);
            } else if (minute > 9 && second >= 10) {
                document.getElementById("timer").innerHTML = `${minute}:${second}`;
                second = second + 1;
                if (second == 60){
                    clearInterval(counter);
                    minute = minute + 1;
                    second = 0;
                    setTimer();
                }

            } else if (minute < 10 && second >= 10){
                document.getElementById("timer").innerHTML = `0${minute}:${second}`;
                second = second + 1;
                if (second == 60){
                    clearInterval(counter);
                    minute = minute + 1;
                    second = 0;
                    setTimer();
                }
            } else if(minute >= 10 && second < 10){
                document.getElementById("timer").innerHTML = `${minute}:0${second}`;
                second = second + 1;
            } else if (minute < 10 && second < 10){
                document.getElementById("timer").innerHTML = `0${minute}:0${second}`;
                second = second + 1;
            } else if (minute == 0 && second == 0){
                document.getElementById("timer").innerHTML = "00:00";
                second = second + 1;
            } 


        }, 1000);
    };

    setTimer();

    timeWatchDiv.appendChild(newP);

    timeSetter
        .appendChild(subtitleDiv)
        .appendChild(timeWatchDiv);



};
