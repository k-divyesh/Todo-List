import { allProjects } from '../storage.';

export var selectedProject = undefined;

function selectProject() {
    const projects = [...document.querySelectorAll('.project')];
    projects.forEach((project) => {
        project.addEventListener('click', function selectProjectName() {
            displayTasks(project.getAttribute('id'));
            selectedProject = project.getAttribute('id');
        });
    });
}

export default selectProject;

//front
export function displayTasks(ObjName) {
    const tasksContainer = document.querySelector('#tasksContainer');
    tasksContainer.innerHTML = '';
    var project = allProjects.find((project) => project.name == `${ObjName}`);
    const allTasks = project.tasks();
    allTasks.forEach((task) => {
        var newTask = document.createElement('form');
        newTask.classList.add('task');
        newTask.innerHTML = `
            <input id="${task.name}" class="checkbox" type="checkbox">
            <label for="${task.name}">
            <span class="taskName">${task.name}</span>
            <p class="taskDesc">${task.desc}</p>
            <span class="dueDate">${task.date}</span>
            <span class="material-symbols-outlined icon">delete</span>
            </label>
            `;
        if (task.priority == 'high') {
            newTask.classList.add('highColor');
        } else if (task.priority == 'mid') {
            newTask.classList.add('midColor');
        } else newTask.classList.add('lowColor');
        tasksContainer.append(newTask);
    });
}
