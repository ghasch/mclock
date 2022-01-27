// vars
const myBtn = document.querySelector('.main');
const myResetBtn = document.querySelector('.reset');
const myIncome = document.querySelector('.cash span');
const myInput = document.querySelector('.payment');
let myOutputS = document.querySelector('.time .sec');
let myOutputM = document.querySelector('.time .minute');
let myOutputH = document.querySelector('.time .hour');

const stopwatch = document.querySelector('.stopwatch');


let myRates = 0;
let myInterval;
let myFlag = true;
let myTime = 0;
let myTimeM = 0;
let myTimeH = 0;


// table generator
myInput.addEventListener('input', (e) => {
    document.querySelector('.day').textContent = (e.target.value / 20).toFixed(2);
    document.querySelector('.hour').textContent = (e.target.value / 160).toFixed(2);
    document.querySelector('.minute').textContent = (e.target.value / 9600).toFixed(2);
    document.querySelector('.sec').textContent = (e.target.value / 576000).toFixed(3);
});

// stopwach
const stopWatch = () => {
    if (myFlag) {
        myFlag = false;
        myInterval = setInterval(startStopWatch, 1000);
        myBtn.textContent = "Pause";
    } else {
        clearInterval(myInterval);
        myFlag = true;
        myBtn.textContent = "Start";
    }

    if (stopwatch.classList.contains('play')) {
        stopwatch.classList.remove('play');
        stopwatch.classList.add('pause');
    } else {
        stopwatch.classList.add('play');
          stopwatch.classList.remove('pause');
    }


}

const startStopWatch = () => {
    let myRate = (myInput.value / 576000);
    myIncome.textContent = myRates.toFixed(2) + " PLN";
    if (myTime < 59) {
        myTime++;
    } else {
        myTime = 0;
        myTimeM++
        if (myTimeM > 59) {               
            myTimeM = 0;
            myTimeH++
        }
    }

    if (myTime < 10) []

    myRates += parseFloat(myRate);
    myOutputS.textContent = myTime;
    myOutputM.textContent = myTimeM;
    myOutputH.textContent = myTimeH;
}

// reset button
const myReset = () => {
    myOutputS.textContent = "0";
    myOutputM.textContent = "0";
    myOutputH.textContent = "0";
    myIncome.textContent = "---";
    myTime = 0;
    myTimeM = 0;
    myTimeH = 0;
    myRates = 0;
    myInput.value = 0;
    clearInterval(myInterval);
    myFlag = true;
    myBtn.textContent = "Start";
    stopwatch.style.animationPlayState = "paused";
      stopwatch.classList.remove('play');
      stopwatch.classList.remove('pause');
}

myBtn.addEventListener('click', stopWatch);
myResetBtn.addEventListener('click', myReset);