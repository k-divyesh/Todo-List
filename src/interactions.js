import onClickAddProject from "./interactions/addProject";
// import manageProjectSelection from "./interactions/selectProject";
// import logic_onClickAddProject from "./interactions/selectProject";
import taskFormDisplay from "./interactions/displayAddTaskForm";
import addTask from "./interactions/addTask";

function allInteractions() {
    onClickAddProject();
    // logic_onClickAddProject();
    taskFormDisplay();
    addTask();
}


export default allInteractions;