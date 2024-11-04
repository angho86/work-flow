class milestone{
    constructor(name) {
        this.name = name;
        this.status = "N";
    }
}

class milestones {
    constructor(){
        this.milestones = [];
        this.mileElement = document.getElementById("milestone-list");
        const addMilestoneBtn = document.getElementById("milestone-add");
        addMilestoneBtn.addEventListener("click", () => this.addMilestone());
    }

    addMilestone(){
        const input = document.getElementById("milestone-input");
        const inputValue = input.value;

        if(inputValue){
            const milestone = new milestone(inputValue);
            this.milestones.push(milestone);
            this.render(milestone);

            input.value = "";
        } else {
            console.log("Neivestas milestone!");
        }
    }
}