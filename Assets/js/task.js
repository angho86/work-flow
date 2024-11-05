class Task{
    constructor(name){
        this.name = name;
        this.milestone = null;
        this.completed = false; // nurodo ar uzduotis atlikta
        this.timer = null; // laikmatis
        this.timeElapsed = 0; // laikas sekundemis
    }

    assignMilestone(milestone){
        this.milestone = milestone;
    }

    // Gauti milestone
    getMilestone() {
        return this.milestone;
    }

    toggleCompletion(){
        this.completed = !this.completed;
    }

    startTimer() {
        if(this.timer) return; // jei laikmatis jau veikia, neleidzia is naujo paleisti
        this.timer = setInterval(() => {
            this.timeElapsed++;
        }, 1000);
    }

    stopTimer(){
        clearInterval(this.timer);
        this.timer = 0;
    }

    resetTimer(){
        this.stopTimer();
        this.timeElapsed = 0;
    }
}

export default Task;