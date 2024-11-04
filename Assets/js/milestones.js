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
            const newmilestone = new milestone(inputValue);
            this.milestones.push(milestone);
            this.render(newmilestone);

            input.value = "";
        } else {
            console.log("Neivestas milestone!");
        }
    }

    render(newmilestone){
        const mileDiv = document.createElement('div');
        mileDiv.className = "task";

        mileDiv.innerHTML = `
                        <input type="checkbox" class="mile-checkbox" />
                        <span>${newmilestone.name}</span>`;


        const mileCheckBox = mileDiv.querySelector(".mile-checkbox");

        mileCheckBox.addEventListener("click", ()=>{
            if(mileCheckBox.checked){
                mileDiv.classList.add("completed");
                newmilestone.status = "Y";
            } else {
                mileDiv.classList.remove("completed");
                newmilestone.status = "N";
            }

            console.log(newmilestone.status, newmilestone.name);
        });

        this.mileElement.appendChild(mileDiv);
    }
}

export default milestones;