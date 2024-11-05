// main.js
import TaskManager from './taskManager.js';
import MilestoneManager from './milestoneManager.js';

// Sukuriame taskManager ir milestoneManager objektus
const taskManager = new TaskManager();
const milestoneManager = new MilestoneManager(taskManager); // Perduodame taskManager į milestoneManager

// Pridėti naują milestone
document.getElementById('milestone-add').addEventListener('click', () => {
    const milestoneName = document.getElementById('milestone-input').value;
    if (milestoneName) {
        milestoneManager.addMilestone(milestoneName);
        document.getElementById('milestone-input').value = ''; // Išvalome įvestį
    }
});

// Pridėti naują užduotį ir priskirti ją aktyviam milestone
document.getElementById('todo-add').addEventListener('click', () => {
    const taskName = document.getElementById('todo-input').value;
    if (taskName) {
        taskManager.addTask(taskName);
        document.getElementById('todo-input').value = ''; // Išvalome įvestį
    }
});
