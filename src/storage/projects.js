const project = () => {
    const tasks = [];

    const addTask = (taskObj) => {
        tasks.push(taskObj);
    }
    const removeTask = (taskObj) => {
        tasks.remove(taskObj);
    }

    return {
        addTask,
        removeTask,
    }
}

export default project;