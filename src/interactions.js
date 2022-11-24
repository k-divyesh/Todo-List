import onClickAddProject from './interactions/addProject';
import taskFormDisplay from './interactions/displayAddTaskForm';
import addTask from './interactions/addTask';

function allInteractions() {
    onClickAddProject();
    taskFormDisplay();
    addTask();
}

export default allInteractions;
