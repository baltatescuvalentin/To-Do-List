

let todoList =  () => {
    let _list = [];

    const existInList = (name) => {
        return _list.some((l) => l.getName() === name);
    }

    const addInList = (taskList) => {
        if(existInList(taskList.getName()) === false)
            _list.push(taskList);
    }

    const getList = () => _list;

    const removeFromList = (name) => {
        _list = _list.filter((l) => l.getName() !== name);
    }

    const setList = (list) => {
        _list = [...list];
    }

    return {
        addInList,
        getList,
        removeFromList,
        setList,
    }
}

export default todoList;