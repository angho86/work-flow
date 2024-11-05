class Milestone {
    constructor(name) {
        this.name = name;
        this.tasks = []; // Užduočių masyvas, priskirtas milestone
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

export default Milestone;