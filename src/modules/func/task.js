import { format } from 'date-fns'


function formatDate(date) {
    const split = date.split('-');

    const year = parseInt(split[0]);
    const month = parseInt(split[1]);
    const day = parseInt(split[2]);

    return [year, month, day];
}

function formatDateFNS(date) {
    const [_year, _month, _day] = formatDate(date);

    let _date = format(new Date(_year, _month, _day), 'MM/DD/YYYY');

    return _date;
}

const task = (title, details, date, priority, isFinished = false) => {
    let _title = title;
    let _details = details;
    let _priority = priority;
    let _isFinished = isFinished;

    const [_year, _month, _day] = formatDate(date);

    let _date = format(new Date(_year, _month, _day), 'MM/DD/YYYY');

    const setDate = (date) => _date = date;
    
    const getDate = () => _date;

    const setTitle = (title) => _title = title;

    const getTitle = () => _title;

    const setDetails = (details) => _details = details;

    const getDetails = () => _details;

    const setPriority = (priority) => _priority = priority;

    const getPriority = () => _priority;

    const setFinished = (finished) => _isFinished = finished;

    const getFinished = () => _isFinished;

    return {
        setDate,
        getDate,
        setDetails,
        getDetails,
        setFinished,
        getFinished,
        setPriority,
        getPriority,
        setTitle,
        getTitle
    };
}

export default task;