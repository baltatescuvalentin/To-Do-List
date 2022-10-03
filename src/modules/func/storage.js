import todoList from "./todolist";

let storage = () => {

    const saveList = (list) => {
        localStorage.setItem('todoList', JSON.stringify(list));
    }

    const getList = () => {
        return (JSON.parse(localStorage.getItem('todoList')));
    }

    const clearList = () => localStorage.clear();

    return {
        saveList,
        getList,
        clearList,
    }
}

export default storage;