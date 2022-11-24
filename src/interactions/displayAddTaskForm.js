import { allProjects } from '../storage.';

export function dropDown() {
    const nameOption = document.querySelector('#selectProject');
    nameOption.innerHTML = '';
    allProjects.forEach((proj) => {
        var projectName = proj.name;
        var option = document.createElement('option');
        option.setAttribute('value', `${projectName}`);
        option.innerHTML = `${projectName}`;
        nameOption.append(option);
    });
}

function viewForm() {
    const addTaskForm = document.querySelector('#addTaskForm');
    const createTaskButton = document.querySelector('.createTaskButton');
    createTaskButton.addEventListener('click', function () {
        addTaskForm.classList.toggle('hide');
    });
}

function closeForm() {
    const addTaskForm = document.querySelector('#addTaskForm');
    const closeButton = document.querySelector('.closeForm');
    closeButton.addEventListener('click', function () {
        addTaskForm.classList.toggle('hide');
    });
}

function taskFormDisplay() {
    viewForm();
    closeForm();
}

export default taskFormDisplay;
