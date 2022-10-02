import task from './task';
import tasks from './tasks';
import notes from './notes';
import createTask from '../layout/viewtask';
import { taskDetailsModal, createNote } from '../layout/modals';
 import note from './note';
import { createAddTaskButton, createMainContentHeader } from '../layout/main';

let inbox = tasks('Inbox');
let notesSide = notes();
console.log(inbox);
console.log(notesSide);


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


    emptyModal();
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

    // mai fa un modal care sa fie peste toate 
    // in caz ca nu sunt toate campurile completate

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

    emptyModal();

    return [title, details, date, priority];
}

function emptyModal() {
    const modal = document.querySelector('.modal_create');
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
    closeModal('create')
    updateNumberOfTasks('inbox');
    emptyMainContent('inbox');
    loadTasks('inbox');
}

function emptyMainContent(name) {
    const mainContent = document.querySelector('.main_content'); 
    mainContent.textContent = '';

    mainContent.appendChild(createMainContentHeader(name));

    mainContent.appendChild(createAddTaskButton());

    

}

function loadTasks(name) {
    const mainContent = document.querySelector('.main_content'); 
    
    let currTasks = inbox.getTasks();
    console.log(currTasks);

    for(let i = 0; i < currTasks.length; i++) {
        mainContent.appendChild(createTask(currTasks[i]));
    }
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

    let newNote = note(details);
    notesSide.addNote(newNote);


    closeModal('notes_create');

}

function openNotes() {

    emptyNotes();

    openModal('notes');

    const notesModal = document.querySelector('.notes');

    let currNotes = notesSide.getNotes();
    console.log(`notesSide = ${currNotes}`);
    

    for(let i = 0; i < currNotes.length; i++) {
        notesModal.appendChild(createNote(currNotes[i].getDetails()));
    }

}

function emptyNotes() {
    const notesModal = document.querySelector('.notes');
    notesModal.textContent = '';
}

function editTask() {

    openModal('create');



    modal.querySelector('#create_title').value = '';
    modal.querySelector('#create_details').value = '';
    modal.querySelector('#create_date').value = '';
}

export {
    priorityButton,
    submitTaskBtn,
    showDetails,
    openModal,
    closeModal,
    submitNoteBtn,
    openNotes,
}