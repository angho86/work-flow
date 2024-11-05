// milestoneManager.js
import Milestone from './milestone.js';

class MilestoneManager {
    constructor(taskManager) {
        this.milestones = [];
        this.milestoneListElement = document.getElementById('milestone-list');
        this.taskManager = taskManager; // Saugo taskManager
    }

    // Pridėti naują milestone
    addMilestone(milestoneName) {
        const milestone = new Milestone(milestoneName);
        this.milestones.push(milestone);
        this.renderMilestone(milestone);
    }

    // Atvaizduoti milestone kaip mygtuką
    renderMilestone(milestone) {
        const milestoneButton = document.createElement('button');
        milestoneButton.className = 'milestone-btn';
        milestoneButton.innerText = milestone.name;

        // Paspaudus mygtuką nustatyti aktyvų milestone
        milestoneButton.addEventListener('click', () => {
            this.taskManager.setActiveMilestone(milestone); // Pasirenkame šį milestone kaip aktyvų
        });

        this.milestoneListElement.appendChild(milestoneButton);
    }
}

export default MilestoneManager;
