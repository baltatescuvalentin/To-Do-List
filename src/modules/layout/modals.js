import task from "../func/task";
import { priorityButton, submitTaskBtn, closeModal, submitNoteBtn } from "../func/logic";

function createNote(text) {
    const div = document.createElement('div');
    div.classList.add('note');

    const img = document.createElement('img')
    img.src = './icons/close.png';
    img.alt = 'close';
    img.classList.add('modal_notes_delete');

    const p = document.createElement('p');
    p.textContent = `${text}`;

    div.appendChild(img);
    div.appendChild(p);

    return div;
}

function modalNotesCreate() {
    const modal = document.createElement('div');
    modal.classList.add('modal_notes_create');
    modal.classList.add('nonactive');

    const header = document.createElement('div');
    header.classList.add('modal_notes_create_header');

    const p_header = document.createElement('p');
    p_header.textContent = 'Create New Note...';

    const img = document.createElement('img');
    img.src = './icons/close.png';
    img.alt = 'close';
    img.classList.add('modal_notes_close_btn');
    img.onclick = () => {
        closeModal('notes_create')
    }

    header.appendChild(p_header);
    header.appendChild(img);


    const details = document.createElement('textarea');
    details.id = 'create_note_details';
    details.placeholder = 'Note: when, where, what...';

    const button = document.createElement('button');
    button.classList.add('add_btn');
    button.setAttribute('id', 'note_add_btn');
    button.textContent = 'Add Note';
    button.onclick = () => {
        submitNoteBtn()
    };

    modal.appendChild(header);
    modal.appendChild(details);
    modal.appendChild(button);

    return modal;

}

function modalNotes() {
    const modal_notes = document.createElement('div');
    modal_notes.classList.add('modal_notes');
    modal_notes.classList.add('nonactive');

    const img = document.createElement('img');
    img.src = './icons/close.png';
    img.alt = 'close';
    img.classList.add('modal_notes_btn');
    img.onclick = () => {
        closeModal('notes')
    };

    const notes = document.createElement('div');
    notes.classList.add('notes');

    modal_notes.appendChild(img);
    modal_notes.appendChild(notes);

    return modal_notes;
}

// function taskDetailsModal() {
//     const div = document.createElement('div');
//     div.classList.add('modal_details');
//     div.classList.add('nonactive');

//     const img = document.createElement('img');
//     img.src = './icons/close.png'
//     img.alt = 'close';
//     img.classList.add('details_close_btn');

//     const p_title = document.createElement('p');
//     p_title.innerHTML = 'Title: ' + '<span>' + 'test' + '</span>';

//     div.appendChild(img);
//     div.appendChild(p_title);

//     const p_details = document.createElement('p');
//     p_details.innerHTML = 'Details: ' + '<span>' + 'test' + '</span>';

//     div.appendChild(p_details);

//     const p_date = document.createElement('p');
//     p_date.innerHTML = 'Due Date: ' + '<span>' + 'test' + '</span>';

//     div.appendChild(p_date);

//     const p_priority = document.createElement('p');
//     p_priority.innerHTML = 'Priority: ' + '<span>' + 'test' + '</span>';

//     div.appendChild(p_priority);

//     return div;
// }



function taskDetailsModal(obj) {
    const div = document.createElement('div');
    div.classList.add('modal_details');
    div.classList.add('nonactive');

    const img = document.createElement('img');
    img.src = './icons/close.png'
    img.alt = 'close';
    img.classList.add('details_close_btn');
    img.onclick = () => {
        closeModal('details');
    }

    const p_title = document.createElement('p');
    p_title.innerHTML = 'Title: ' + '<span>' + obj.getTitle() + '</span>';

    div.appendChild(img);
    div.appendChild(p_title);

    const p_details = document.createElement('p');
    p_details.innerHTML = 'Details: ' + '<span>' + obj.getDetails() + '</span>';

    div.appendChild(p_details);

    const p_date = document.createElement('p');
    p_date.innerHTML = 'Due Date: ' + '<span>' + obj.getDate() + '</span>';

    div.appendChild(p_date);

    const p_priority = document.createElement('p');
    p_priority.innerHTML = 'Priority: ' + '<span>' + obj.getPriority() + '</span>';

    div.appendChild(p_priority);

    return div;
}



function modalTaskCreate() {
    const div = document.createElement('div');
    div.classList.add('modal_create');
    div.classList.add('nonactive');

    const header = document.createElement('div');
    header.classList.add('modal_create_header');

    const p_header = document.createElement('p');
    p_header.textContent = 'Create New Task...';

    const img = document.createElement('img');
    img.src = './icons/close.png';
    img.alt = 'close';
    img.classList.add('modal_task_close_btn');
    img.onclick = () => {
        closeModal('create');
    };

    header.appendChild(p_header);
    header.appendChild(img);

    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'create_title';
    title.id = 'create_title';
    title.placeholder = 'Title...';

    const details = document.createElement('textarea');
    details.id = 'create_details';
    details.placeholder = 'Details: when, where, what...';

    const button = document.createElement('button');
    button.classList.add('add_btn');
    button.setAttribute('id', 'task_add_btn');
    button.textContent = 'Add Task'; 
    button.onclick = submitTaskBtn;

    const priority = document.createElement('div');
    priority.classList.add('create_priority');

    const p_priority = document.createElement('p');
    p_priority.textContent = 'Priority';

    const low = document.createElement('div');
    low.classList.add('create_priority_low');
    low.setAttribute('id', 'low');
    low.textContent = 'LOW';
    low.onclick = priorityButton;

    const medium = document.createElement('div');
    medium.classList.add('create_priority_medium');
    medium.setAttribute('id', 'medium');
    medium.textContent = 'MEDIUM';
    medium.onclick = priorityButton;

    const high = document.createElement('div');
    high.classList.add('create_priority_high');
    high.setAttribute('id', 'high');
    high.textContent = 'HIGH';
    high.onclick = priorityButton;

    priority.appendChild(p_priority);
    priority.appendChild(low);
    priority.appendChild(medium);
    priority.appendChild(high);
    priority.appendChild(button);

    const date = document.createElement('input');
    date.type = 'date';
    date.name = 'create_date';
    date.id = 'create_date';

    const span = document.createElement('span');
    span.textContent = 'Due Date: ';
    span.appendChild(date);

    div.appendChild(header);
    div.appendChild(title);
    div.appendChild(details);
    div.appendChild(span);
    div.appendChild(priority);

    return div;

}

export {
    createNote,
    modalNotesCreate,
    modalNotes,
    modalTaskCreate,
    taskDetailsModal,
}