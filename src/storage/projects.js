export const allProjects = [];

const project = (name) => {
    const allTasks = [];

    const addTask = (taskObj) => {
        allTasks.push(taskObj);
    }
    const removeTask = (taskObj) => {
        allTasks.remove(taskObj);
    }
    const tasks = () => {
        return allTasks;
    }
    return {
        name,
        addTask,
        removeTask,
        tasks,
    }
}

export default project;