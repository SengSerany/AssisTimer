let GlobalValues = {};
let button = document.getElementById("timerBtn");
let timeSetter = document.getElementById("setTime");

button.addEventListener("click", timerField);

function timerField() {

    timeSetter.innerHTML = "";

    let lineBreak = document.createElement("br");

    let columnsProject = document.createElement("div");
    columnsProject.classList.add("columns", "is-mobile");

    let columnsTimer = document.createElement("div");
    columnsTimer.classList.add("columns", "is-mobile");

    let subtitleDiv = document.createElement("div");
    subtitleDiv.classList.add("subtitle", "is-4");

    let newH2 = document.createElement("h2");
    let newTextH2 = document.createTextNode("Timer - En marche");
    newH2.appendChild(newTextH2);
    subtitleDiv.appendChild(newH2);
    subtitleDiv.appendChild(lineBreak);
    subtitleDiv.appendChild(lineBreak);

    let beginSinceDiv = document.createElement("div");
    beginSinceDiv.setAttribute("id", "beginSinceDiv");
    beginSinceDiv.classList.add("column", "is-one-quarter");

    let beginBaliseTitle = document.createElement("p");
    beginBaliseTitle.setAttribute("id", "beginSinceTitle");
    let beginTextTitle = document.createTextNode("À commencer depuis:");

    let beginBaliseWatch = document.createElement("p");
    beginBaliseWatch.setAttribute("id", "beginSinceWatch");

    beginBaliseTitle.appendChild(beginTextTitle);

    let finishAtDiv = document.createElement("div");
    finishAtDiv.setAttribute("id", "finishAtDiv");
    finishAtDiv.classList.add("column", "is-one-quarter");

    let finishBaliseTitle = document.createElement("p");
    finishBaliseTitle.setAttribute("id", "finishAtTitle");
    let finishTitleText = document.createTextNode("Fini dans:");

    let finishBaliseWatch = document.createElement("p");
    finishBaliseWatch.setAttribute("id", "FinishAtWatch");

    finishBaliseTitle.appendChild(finishTitleText);

    let beginDateDiv = document.createElement("div");
    beginDateDiv.classList.add("column", "is-one-quarter");
    beginDateDiv.setAttribute("id", "TimerBeginDate");

    let endDateDiv = document.createElement("div");
    endDateDiv.classList.add("column", "is-one-quarter");
    endDateDiv.setAttribute("id", "timerFinishDate");

    let columnProject = document.createElement("div");
    columnProject.classList.add("column", "is-one-third");

    let columnTask = document.createElement("div");
    columnTask.classList.add("column", "is-one-third");

    let titleProject = document.createElement("h4");
    let titleProjectText = document.createTextNode("Projet:")
    titleProject.appendChild(titleProjectText);

    let titleTask = document.createElement("h4");
    let titleTaskText = document.createTextNode("Tâche:");
    titleTask.appendChild(titleTaskText);
    
    let nameProject = document.createElement("p");
    let nameProjectText = document.createTextNode("Projet X");
    nameProject.appendChild(nameProjectText);

    let nameTask = document.createElement("p");
    let nameTaskText = document.createTextNode("Recherche");
    nameTask.appendChild(nameTaskText);

    let playBtn = document.createElement("a");
    playBtn.setAttribute("id", "playBtn");
    playBtn.className = "breakOff";
    let imgPlayBtn = document.createElement("img");
    imgPlayBtn.setAttribute("src", "/images/play_on.svg");
    imgPlayBtn.setAttribute("alt", "Bouton pause");
    imgPlayBtn.setAttribute("style", "width: 50px;")
    playBtn.appendChild(imgPlayBtn);

    let stopBtn = document.createElement("a");
    stopBtn.setAttribute("id", "stopBtn");
    stopBtn.className = "stopOff";
    let imgStopBtn = document.createElement("img");
    imgStopBtn.setAttribute("src", "/images/stop_off.svg");
    imgStopBtn.setAttribute("alt", "Bouton stop");
    imgStopBtn.setAttribute("style", "width: 50px;");
    stopBtn.appendChild(imgStopBtn);

    function addCounter(){ 

        let addSecond = 1;
        let addMinute = 0;
        
        function addCounterInterval(){

            let addCounterSet = window.setInterval(() => {
                
                if (stopBtn.classList.contains("stopOn")){
                    clearInterval(addCounterSet);
                    document.getElementById("beginSinceWatch").innerHTML = "00:00";
                } else if (playBtn.classList.contains("breakOn")){
                    clearInterval(addCounterSet);
                } else if(playBtn.classList.contains("breakOff") && playBtn.classList.contains("continue")){
                    let addInner = document.getElementById("beginSinceWatch").innerHTML.split(":");
                    addMinute = parseInt(addInner[0]);
                    addSecond = parseInt(addInner[1]);
                    let btns = document.getElementById("controlBtns");
                    btns.remove();
                    estimateTime();
                    endDate();
                    controlBtn();
                } else if (addMinute == 0 && addSecond == 0){
                    document.getElementById("beginSinceWatch").innerHTML = "00:00";
                    addSecond = addSecond + 1;
                } else if (addMinute == 25 && addSecond == 1){
                    clearInterval(addCounter);
                } else if (addMinute > 9 && addSecond >= 10){
                    document.getElementById("beginSinceWatch").innerHTML = `${addMinute}:${addSecond}`;
                    addSecond = addSecond + 1;
                    if (addSecond == 60){
                        clearInterval(addCounter);
                        addMinute = addMinute + 1;
                        addSecond = 0;
                        addCounterInterval();
                    }

                } else if (addMinute < 10 && addSecond >= 10){
                    document.getElementById("beginSinceWatch").innerHTML = `0${addMinute}:${addSecond}`;
                    addSecond = addSecond + 1;
                    if (addSecond == 60){
                        clearInterval(addCounter);
                        addMinute = addMinute + 1;
                        addSecond = 0;
                        addCounterInterval();
                    }
                } else if (addMinute >= 10 && addSecond < 10){
                    document.getElementById("beginSinceWatch").innerHTML = `${addMinute}:0${addSecond}`;
                    addSecond = addSecond + 1;
                } else if (addMinute < 10 && addSecond < 10){
                    document.getElementById("beginSinceWatch").innerHTML = `0${addMinute}:0${addSecond}`;
                    addSecond = addSecond + 1;
                }

            }, 1000);
        }
        addCounterInterval();
    };

    function subCounter(){ 
        
        let subSecond = 59;
        let subMinute = 24;

        function subCounterInterval(){
            let subCounterSet = window.setInterval(() => {

                if (stopBtn.classList.contains("stopOn")){
                    clearInterval(subCounterSet);
                    document.getElementById("FinishAtWatch").innerHTML = "25:00";
                } else if (playBtn.classList.contains("breakOn")){
                    clearInterval(subCounterSet);
                } else if(playBtn.classList.contains("breakOff") && playBtn.classList.contains("continue")){
                    let subInner = document.getElementById("FinishAtWatch").innerHTML.split(":");
                    subMinute = parseInt(subInner[0]);
                    subSecond = parseInt(subInner[1]);
                    playBtn.classList.remove("continue");
                } else if (subMinute < 0 && subSecond == 59){
                    document.getElementById("FinishAtWatch").innerHTML = "00:00";
                    clearInterval(subCounter);
                } else if (subMinute >= 10 && subSecond == 0){
                    document.getElementById("FinishAtWatch").innerHTML = `${subMinute}:0${subSecond}`;
                    if (subMinute >= 0 && subSecond <= 0){
                        clearInterval(subCounter);
                        subMinute -= 1;
                        subSecond = 59;
                        subCounterInterval();
                    }
                } else if (subMinute < 10 && subSecond < 10){
                    document.getElementById("FinishAtWatch").innerHTML = `0${subMinute}:0${subSecond}`;
                    subSecond -= 1;
                    if (subMinute >= 0 && subSecond < 0){
                        clearInterval(subCounter);
                        subMinute -= 1;
                        subSecond = 59;
                        subCounterInterval();
                    }
                } else if (subMinute >= 10 && subSecond < 10){
                    document.getElementById("FinishAtWatch").innerHTML = `${subMinute}:0${subSecond}`;
                    subSecond -= 1;
                    if (subSecond < 0){
                        clearInterval(subCounter);
                        subMinute -= 1;
                        subSecond = 59
                        subCounterInterval();
                    }
                } else if (subMinute < 10 && subSecond < 10){
                    document.getElementById("FinishAtWatch").innerHTML = `0${subMinute}:0${subSecond}`;
                    subSecond -= 1;
                } else if (subMinute < 10 && subSecond >= 10){
                    document.getElementById("FinishAtWatch").innerHTML = `0${subMinute}:${subSecond}`;
                    subSecond -= 1;
                } else if (subMinute >= 10 && subSecond >= 10){
                    document.getElementById("FinishAtWatch").innerHTML = `${subMinute}:${subSecond}`;
                    subSecond -= 1;
                }

            }, 1000);
        }
        subCounterInterval();
    };

    let timeBaliseNow = document.createElement("p");
    let timeBaliseAfter = document.createElement("p");

    function endDate(){
        function checkTime(time){
            if (time < 10){
                time = `0${time}`;
            };
            return time;
        }

        function countTime() {

            function nowTime(){
                let now = new Date();
                let h = now.getHours();
                let m = now.getMinutes();
                let s = now.getSeconds();

                h = checkTime(h);
                m = checkTime(m);
                s = checkTime(s);

                timeBaliseNow.innerHTML = `Commencer à:<br/> ${h}:${m}:${s}`;
            }

            function afterTime(){
                let now = new Date();
                let h = now.getHours();
                let m = now.getMinutes();
                let s = now.getSeconds();
                
                m = m + 25;

                if (m >= 60) {
                    m = m - 60;
                    h += 1;
                }

                h = checkTime(h);
                m = checkTime(m);
                s = checkTime(s);

                timeBaliseAfter.innerHTML = `Terminer à:<br/> ${h}:${m}:${s}`;
            }
            
            nowTime();
            afterTime();

        }

        
        countTime();
    }

    function breakTime(){
        if (playBtn.classList.contains("onStop")){
            imgPlayBtn.setAttribute("src", "/images/play_on.svg");
            imgStopBtn.setAttribute("src", "/images/stop_off.svg");
            playBtn.className = "breakOff";
            stopBtn.className = "stopOff";
            let btns = document.getElementById("controlBtns");
            btns.remove();
            estimateTime();
            endDate();
            controlBtn();
        } else if (playBtn.classList.contains("breakOn")){
            imgPlayBtn.setAttribute("src", "/images/play_on.svg");
            playBtn.className = "breakOff";
            playBtn.classList.add("continue");
        } else if(playBtn.classList.contains("breakOff")){
            imgPlayBtn.setAttribute("src", "/images/pause_circle_on.svg");
            playBtn.className = "breakOn";
            beginDateDiv.innerHTML = "";
            endDateDiv.innerHTML = "";
            
        } else {
            alert("Le bouton play/pause ne marche pas correctent :c")
        };
        addCounter();
        subCounter();
    }

    let stopTime = () => {
        if (stopBtn.classList.contains("stopOff")){
            imgStopBtn.setAttribute("src", "/images/stop_on.svg");
            imgPlayBtn.setAttribute("src", "/images/play_off.svg")
            playBtn.className = "onStop";
            stopBtn.className = "stopOn";
            beginDateDiv.innerHTML = "";
            endDateDiv.innerHTML = "";
        } else if (stopBtn.classList.contains("stopOn")){
            imgStopBtn.setAttribute("src", "/images/stop_off.svg");
            imgPlayBtn.setAttribute("src", "/images/play_on.svg")
            stopBtn.className = "stopOff";
            playBtn.className = "breakOff";
            let btns = document.getElementById("controlBtns");
            btns.remove();
            estimateTime();
            endDate();
            controlBtn();
            
        } else {
            alert("Un problème est survenu ! Le bouton stop ne marche pas comme convenu ! :c")
        };
        addCounter();
        subCounter();
    }

    beginSinceDiv.appendChild(beginBaliseTitle);
    beginSinceDiv.appendChild(beginBaliseWatch);

    finishAtDiv.appendChild(finishBaliseTitle);
    finishAtDiv.appendChild(finishBaliseWatch);
    
    timeSetter.appendChild(subtitleDiv);
    timeSetter.appendChild(columnsProject);
    columnsProject.appendChild(columnProject);
    columnsProject.appendChild(columnTask);
    columnProject.appendChild(titleProject);
    columnProject.appendChild(nameProject);
    columnTask.appendChild(titleTask);
    columnTask.appendChild(nameTask);


    timeSetter.appendChild(lineBreak);

    let estimateTime = () => {
        timeSetter.appendChild(columnsTimer);
        columnsTimer.appendChild(beginSinceDiv);
        columnsTimer.appendChild(finishAtDiv);

        columnsTimer.appendChild(beginDateDiv);
        beginDateDiv.appendChild(timeBaliseNow);
        columnsTimer.appendChild(endDateDiv);
        endDateDiv.appendChild(timeBaliseAfter);
    }
    estimateTime();

    let controlBtn = () => {
        let btnsDiv = document.createElement("div");
        btnsDiv.setAttribute("id", "controlBtns")

        btnsDiv.appendChild(playBtn);
        btnsDiv.appendChild(stopBtn);
        timeSetter.appendChild(btnsDiv);
    }
    controlBtn();

    document.getElementById("beginSinceWatch").innerHTML = "00:00";
    document.getElementById("FinishAtWatch").innerHTML = "25:00";

    addCounter();
    subCounter();
    endDate();

    playBtn.addEventListener("click", breakTime);
    stopBtn.addEventListener("click", stopTime);
};
