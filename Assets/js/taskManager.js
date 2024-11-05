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
        taskDiv.innerHTML = `<span>${task.name}</span>`;
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
}

export default TaskManager;
