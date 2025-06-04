let timer;
let timeLeft=10; // 25 minutes in seconds
let isPaused=true;

const timerDisplay=document.getElementById('timer');
const startBtn=document.getElementById('start');
const pauseBtn=document.getElementById('pause');
const resetBtn=document.getElementById('reset');

function updateDisplay(){
    if(timeLeft>0){
        const minutes=Math.floor(timeLeft/60).toString().padStart(2, '0');
        const seconds=(timeLeft%60).toString().padStart(2, '0');
        timerDisplay.textContent=`${minutes}:${seconds}`;
    }else{
        timerDisplay.textContent="Time Up";
    }

  //Blinking when 3 seconds or less remain
  if(timeLeft<=3&&timeLeft>0){
    timerDisplay.classList.add('blink');
  }else{
    timerDisplay.classList.remove('blink');
  }

  //The red class based on time left
  if(timeLeft<=5&&timeLeft>0){
    timerDisplay.classList.add('red');
  }else{
    timerDisplay.classList.remove('red')
  }
}

function startTimer(){
  if (!isPaused) return;
  isPaused = false;
  timerDisplay.classList.remove('paused'); // Remove red color when resuming
  timer = setInterval(()=>{
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      //alert('Time is up!');
      updateDisplay(); // Ensure "Time up" is shown
    }
  },1000);
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
  timerDisplay.classList.add('paused'); // Add red color when paused
}

function resetTimer() {
  isPaused = true;
  clearInterval(timer);
  timeLeft =10;
  updateDisplay();
  timerDisplay.classList.remove('paused'); // Remove red color on reset
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
