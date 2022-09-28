


function createTask() {
    const container = document.createElement('div');
    container.classList.add('task_container');

    const priority = document.createElement('div');
    priority.classList.add('priority_low');

    const task = document.createElement('div');
    task.classList.add('task');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'finished';
    input.id = 'finished';

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'Title';

    const details = document.createElement('p');
    details.classList.add('details');
    details.textContent = 'Details';

    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = '12/12/2022';

    const edit = document.createElement('img');
    edit.src = './icons/edit.png';
    edit.alt = 'edit';
    edit.classList.add('edit');

    const close = document.createElement('img');
    close.src = './icons/close.png';
    close.alt = 'close';
    close.classList.add('close');

    task.appendChild(input);
    task.appendChild(title);
    task.appendChild(details);
    task.appendChild(date);
    task.appendChild(edit);
    task.appendChild(close);

    container.appendChild(priority);
    container.appendChild(task);

    return container;
}

export default createTask;