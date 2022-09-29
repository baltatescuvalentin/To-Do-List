import { compareAsc, isThisWeek, isToday, toDate, weekStartsOn } from 'date-fns'
import { formatDate, formatDateFNS } from './task';
let tasks = (name) => {
    let _name = name;
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

    const getTasks = () => {
        return _tasks;
    }

    const removeTask = (title) => {
        _tasks = _tasks.filter((t) => t.getTitle() !== title);
    }

    const getName = () => _name;

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
        const [year_a, month_a, day_a] = formatDate(a.getRawDate());
        const [year_b, month_b, day_b] = formatDate(b.getRawDate());

        return compareAsc(new Date(year_a, month_a-1, day_a), 
            new Date(year_b, month_b-1, day_b));
    }

    const sortDate = () => {
        _tasks.sort(compareDate);
    }

    const getTodayTasks = () => {
        return _tasks.filter((t) => {
            const today = new Date(formatDateFNS(t.getRawDate()));
            return isToday(toDate(today));
        })
    }

    const getUpcomingTasks = () => {
        return _tasks.filter((t) => {
            const today = new Date(formatDateFNS(t.getRawDate()));
            return isThisWeek(toDate(today), { weekStartsOn: 1 })
        })
    }

    return {
        sortDate,
        sortPriority,
        getTask,
        addTask,
        removeTask,
        getName,
        getTodayTasks,
        getUpcomingTasks,
        getTasks,
    }

}

export default tasks;