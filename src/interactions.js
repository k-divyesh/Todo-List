import manageProject from "./interactions/addProject";
import taskFormDisplay from "./interactions/displayAddTaskForm";
import addTask from "./interactions/addTask";

function allInteractions() {
    manageProject();
    taskFormDisplay();
    addTask();
}


export default allInteractions;