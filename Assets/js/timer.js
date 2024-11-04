let timer;
let totalTime =0;
let isRunning = false;

document.getElementById("start-btn").addEventListener('click', () => {
    if(!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            totalTime++;
            updateTimerDisplay();
        }, 1000);
    }
});

document.getElementById("pause-btn").addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
});

document.getElementById('stop-btn').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    alert(`sesija baigta: ${Math.floor(totalTime / 3600)} valandu ${Math.floor((totalTime %3600) / 60)} minuciu`);
    totalTime = 0;
    // galima prideti logika, kad issaugoti laika

});

function updateTimerDisplay(){
    document.getElementById('timer').innerText = `${Math.floor(totalTime / 3600)} : ${Math.floor((totalTime % 3600) / 60)}`;
}