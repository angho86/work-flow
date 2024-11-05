class Task{
    constructor(name){
        this.name = name;
        this.milestone = null;
    }

    assignMilestone(milestone){
        this.milestone = milestone;
    }

    // Gauti milestone
    getMilestone() {
        return this.milestone;
    }
}

export default Task;