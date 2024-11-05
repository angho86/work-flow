// taskManager.js
import Task from './task.js';

class TaskManager {
    constructor() {
        this.tasks = [];
        this.activeMilestone = null; // Pasirinktas aktyvus milestone
        this.taskListElement = document.getElementById('task-list');
    }

    // Pridėti naują užduotį
    addTask(taskName) {
        if (!this.activeMilestone) {
            alert("Please select a milestone before adding a task.");
            return;
        }

        const task = new Task(taskName);
        task.assignMilestone(this.activeMilestone); // Priskiriame užduotį aktyviam milestone
        this.tasks.push(task);
        this.activeMilestone.addTask(task); // Priskiriame užduotį milestone
        this.renderTask(task); // Atvaizduojame užduotį
    }

    // Parodyti užduotį
    renderTask(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
                            <input type="checkbox" class="task-complete"${task.completed ? 'checked' : ''} />
                            <span>${task.name}</span>
                            <span class="timer">${task.timeElapsed} s</span>
                            <button class="task-start">Start</button>
                            <button class="task-stop" disabled>Stop</button>
                            <button class="task-delete">Del</button>
        `;

        const checkbox = taskDiv.querySelector('.task-complete');
        checkbox.addEventListener('change', () => this.toggleTaskCompletion(task, checkbox));

        const startBtn = taskDiv.querySelector('.task-start');
        startBtn.addEventListener('click', () => this.startTimer(task, taskDiv));

        const stopBtn = taskDiv.querySelector('.task-stop');
        stopBtn.addEventListener('click', () => this.stopTimer(task, taskDiv));

        const deleteBtn = taskDiv.querySelector('.task-delete');
        deleteBtn.addEventListener('click', () => this.removeTask(task));
        this.taskListElement.appendChild(taskDiv);
    }

    // Nustatyti aktyvų milestone
    setActiveMilestone(milestone) {
        this.activeMilestone = milestone;
        this.renderTasksForMilestone(milestone); // Parodyti užduotis priskirtas šiam milestone
    }

    // Parodyti užduotis, priskirtas aktyviam milestone
    renderTasksForMilestone(milestone) {
        this.taskListElement.innerHTML = ''; // Išvalome sąrašą
        milestone.tasks.forEach((task) => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `<span>${task.name}</span>`;
            this.taskListElement.appendChild(taskDiv);
        });
    }

    toggleTaskCompletion(task, checkbox){
        task.toggleCompletion();
        checkbox.checked = task.completed;
        if(task.completed){
            task.resetTimer();
        }
    }

    startTimer(task, taskDiv){
        if(task.completed) return; // jei uzduotis atlikta, neleidzia ijungti laikmacio

        task.startTimer();
        taskDiv.querySelector('.task-start').disabled = true; // isjungia "start"
        taskDiv.querySelector('.task-stop').disabled = false; // ijungia "stop"

        this.updateTimer(task, taskDiv);
    }

    stopTimer(task, taskDiv){
        task.stopTimer();
        taskDiv.querySelector('.task-start').disabled = false; // ijungia "start"
        taskDiv.querySelector('.task-stop').disabled = true; // ijungia "stop"

        this.updateTimer(task, taskDiv){
            const timerElement = taskDiv.querySelector('.timer');
            const updateInterval = setInterval(() => {
                if(task.timer){
                    timerElement.textContent = `${task.timeElapsed} s`;
                } else {
                    clearInterval(updateInterval); // sustabdo atnaujinima kai laikmatis sustabdytas
                }
            }, 1000);
        }
    }

    removeTask(task){
        const taskIndex = this.tasks.findIndex(t => t.name === task.name);
        if(taskIndex > 1){
            const taskDiv = document.querySelector(`[data-task-name="${task.name}]`);
            if(taskDiv){
                taskDiv.remove();
            }

            this.tasks.splice(taskIndex, 1); // pasalina is bendro saraso
            this.activeMilestone.tasks = this.activeMilestone.tasks.filter(t => t.name !== task.name); // pasalinama is milestone uzduociu saraso
        }
    }
}

export default TaskManager;
