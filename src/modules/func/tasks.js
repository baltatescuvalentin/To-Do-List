import { compareAsc } from 'date-fns'

const tasks = () => {
    let _tasks = [];

    const existTask = (task) => {
        return _tasks.some((t) => t.getTitle() === task.getTitle());
    }

    const addTask = (task) => {
        if(existTask(task) === false)
            _tasks.push(task);
    }

    const getTask = (title) => {
        return _tasks.find((t) => t.getTitle() === title);
    }

    const removeTask = (title) => {
        _tasks = _tasks.filter((t) => t.getTitle() !== title);
    }

    const comparePriority = (a, b) => {
        const a_p = a.getPriority();
        const b_p = b.getPriority();

        if(a_p < b_p) 
            return -1;
        else if(a_p > b_p)
            return 1;
        else return 0;
    }

    const sortPriority = () => {
        _tasks.sort(comparePriority);
    }

    const compareDate = (a, b) => {
        const [year_a, month_a, day_a] = a.formatDate(a.getRawDate());
        const [year_b, month_b, day_b] = b.formatDate(b.getRawDate());

        return compareAsc(new Date(year_a, month_a-1, day_a), 
            new Date(year_b, month_b-1, day_b));
    }

    const sortDate = () => {
        _tasks.sort(compareDate);
    }

    return {
        sortDate,
        sortPriority,
        getTask,
        addTask,
        removeTask,
    }

}

export default tasks;