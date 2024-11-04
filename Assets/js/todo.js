class Task {
    constructor(name) {
        this.name = name;
        this.isRunning = false;
        this.timer = 0;
        this.interval = null;
    }

    startTimer(){
        if(!this.isRunning) {
            this.isRunning = true;
            this.interval = setInterval(() => {
                this.timer++;
            }, 1000);
        }
    }

    endTimer() {
        this.isRunning = false;
        clearInterval(this.interval);
        this.timer = 0; // sitoje vietoje galima padaryti laiko issaugojimo funkcionaluma
    }
}

class TaskManager{
    constructor(){
        this.tasks = [];
        this.taskListElement = document.getElementById('task-list');
        const todoAddBtn = document.getElementById('todo-add');
        todoAddBtn.addEventListener('click', () => this.addTask());

    }

    addTask() {
        const input = document.getElementById("todo-input");
        const taskName = input.value;

        if(taskName){
            const task = new Task(taskName);
            this.tasks.push(task);
            this.renderTask(task);

            input.value = "";
        } else {
            console.log("Neivesta uzduotis");
        }
    }

    renderTask(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        taskDiv.innerHTML = `
                        <input type="checkbox" class="task-checkbox" />
                        <span>${task.name}</span>
                        <button class="start-btn">Start</button>
                        <button class="end-btn">End</button>
                        <span class="timer">${task.timer} s</span>`;

        const checkbox = taskDiv.querySelector('.task-checkbox');
        const startBtn = taskDiv.querySelector('.start-btn');
        const endBtn = taskDiv.querySelector('.end-btn');
        const timerDisplay = taskDiv.querySelector(".timer");
        
        checkbox.addEventListener("click", ()=>{
            if(checkbox.checked){
                taskDiv.classList.add("completed");
            } else {
                taskDiv.classList.remove("completed");
            }
        });

        startBtn.addEventListener("click", () => {
            task.startTimer();
            const updateTimer = setInterval(() => {
                timerDisplay.innerText = `${task.timer} s`;
                if(!task.isRunning){
                    clearInterval(updateTimer);
                }
            }, 1000);
        });

        endBtn.addEventListener("click", () => {
            task.endTimer();

            timerDisplay.innerText = `${task.timer} s`; // galima rodyti baigta laika
        });

        this.taskListElement.appendChild(taskDiv);
    }


}

const taskManager = new TaskManager();