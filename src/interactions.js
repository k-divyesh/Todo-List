import onClickAddProject from "./interactions/addProject";
// import setCurrent from "./interactions/currentProject";
import taskFormDisplay from "./interactions/displayAddTaskForm";
import addTask from "./interactions/addTask";

function allInteractions() {
    onClickAddProject();
    // var ongoingProject = setCurrent();
    taskFormDisplay();
    addTask();
}


export default allInteractions;