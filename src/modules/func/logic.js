import task from './task';
import tasks from './tasks';
import notes from './notes';
import createTask from '../layout/viewtask';
import { taskDetailsModal, createNote } from '../layout/modals';
import note from '/note';


let inbox = tasks('Inbox');
let notesSide = notes();
console.log(inbox);


function openTaskModal() {

    const content = document.querySelector('.main');
    content.classList.add('modal_active');

    const createModal = document.querySelector('.modal_create');
    createModal.classList.remove('nonactive');
    createModal.classList.add('active');

}

function closeTaskModal() {
    const content = document.querySelector('.main');
    content.classList.remove('modal_active');

    const createModal = document.querySelector('.modal_create');
    createModal.classList.add('nonactive');
    createModal.classList.remove('active');
}

function openModal(name) {
    const content = document.querySelector('.main');
    content.classList.add('modal_active');

    const createModal = document.querySelector(`.modal_${name}`);
    createModal.classList.remove('nonactive');
    createModal.classList.add('active');
}

function closeModal(name) {
    const content = document.querySelector('.main');
    content.classList.remove('modal_active');

    const createModal = document.querySelector(`.modal_${name}`);
    createModal.classList.add('nonactive');
    createModal.classList.remove('active');
}

function priorityButton(e) {
    console.log(e.target);

    const modal = document.querySelector('.modal_create');
    const low = modal.querySelector('#low');
    const medium = modal.querySelector('#medium');
    const high = modal.querySelector('#high');

    if(e.target.getAttribute('id') === 'low') {
        e.target.classList.add('clicked_low');
        medium.classList.remove('clicked_medium');
        high.classList.remove('clicked_high');
    }
    else if(e.target.getAttribute('id') === 'medium') {
        e.target.classList.add('clicked_medium');
        low.classList.remove('clicked_low');
        high.classList.remove('clicked_high');
    }
    else {
        e.target.classList.add('clicked_high');
        low.classList.remove('clicked_low');
        medium.classList.remove('clicked_medium');
    }

}

function getTaskInputs() {
    const modal = document.querySelector('.modal_create');
    const title = modal.querySelector('#create_title').value;
    const details = modal.querySelector('#create_details').value;
    const date = modal.querySelector('#create_date').value;
    const low = modal.querySelector('#low').classList.contains('clicked_low');
    const medium = modal.querySelector('#medium').classList.contains('clicked_medium');
    const high = modal.querySelector('#high').classList.contains('clicked_high');
    let priority = '';
    if(low) priority = 'low';
    else if(medium) priority = 'medium';
    else priority = 'high';

    modal.querySelector('#create_title').value = '';
    modal.querySelector('#create_details').value = '';
    modal.querySelector('#create_date').value = '';

    if(low) modal.querySelector('#low').classList.remove('clicked_low');
    else if(medium)  modal.querySelector('#medium').classList.remove('clicked_medium');
    else modal.querySelector('#high').classList.remove('clicked_high');

    return [title, details, date, priority];
}

function updateNumberOfTasks(name) {
    const elem = document.querySelector(`#${name}`);
    const numberOf = elem.querySelector('.numberOf');
    numberOf.textContent = `${inbox.getTasks().length}`;

}

function submitTaskBtn() {
    const [title, details, date, priority] = getTaskInputs();
    console.log(title, details, date, priority);
    let task1 = task(title, details, date, priority, false);
    inbox.addTask(task1);
    closeTaskModal();
    updateNumberOfTasks('inbox');
    const mainContent = document.querySelector('.main_content'); 
    mainContent.appendChild(createTask(task1));
}

function showDetails(e) {

    console.log(inbox.getTask(e.target.parentNode.childNodes[1].textContent));
    const task = inbox.getTask(e.target.parentNode.childNodes[1].textContent);
    
    
    const content = document.querySelector('.content');
    content.appendChild(taskDetailsModal(task));
}

function submitNoteBtn() {
    const modal = document.querySelector('.modal_notes_create');
    const details = modal.querySelector('#create_note_details').value;

    modal.querySelector('#create_note_details').value = '';

    let note = note(details);
    notesSide.addNote(note);

    console.log(note);
    console.log(notesSide);

}

function openNotes() {
    const notesModal = document.querySelector('.modal_notes');

    let Notes = notesSide.getNotes();

    for(let i = 0; i < Notes.length; i++) {
        notesModal.appendChild(createNote(Notes[i]));
    }

}

export {
    openTaskModal,
    priorityButton,
    submitTaskBtn,
    closeTaskModal,
    showDetails,
    openModal,
    closeModal,
    submitNoteBtn,
    openNotes,
}