import { openTaskModal, openModal, openNotes } from "../func/logic";

function sidebar_subcategories_elem(name) {
    const div = document.createElement('div');
    div.classList.add('sidebar_categories_elem');

    const img1 = document.createElement('img');
    img1.src = './icons/folder.png';
    img1.alt = 'folder';

    const p = document.createElement('p');
    p.textContent = `${name}`;

    const img2 = document.createElement('img');
    img2.src = './icons/close.png';
    img2.alt = 'close';

    div.appendChild(img1);
    div.appendChild(p);
    div.appendChild(img2);

    return div;
}

function sidebar_menu(name) {
    const sidebarMenu = document.createElement('div');
    sidebarMenu.classList.add('sidebar_menu');
    sidebarMenu.setAttribute('id', `${name}`);

    const img = document.createElement('img');
    img.src = `./icons/${name}.png`;
    img.alt = `${name}`;

    const upperName = name.charAt(0).toUpperCase() + name.slice(1);
    const p = document.createElement('p');
    p.textContent = upperName;

    const empty_p = document.createElement('p');
    empty_p.classList.add('numberOf');

    sidebarMenu.appendChild(img);
    sidebarMenu.appendChild(p);
    sidebarMenu.appendChild(empty_p);

    return sidebarMenu;
}

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    sidebar.appendChild(sidebar_menu('inbox'));
    sidebar.appendChild(sidebar_menu('today'));
    sidebar.appendChild(sidebar_menu('upcoming'));
    sidebar.appendChild(sidebar_menu('trash'));

    const sidebarMenu = document.createElement('div');
    sidebarMenu.classList.add('sidebar_menu');

    const div = document.createElement('div');
    div.classList.add('sidebar_important');

    const p = document.createElement('p');
    p.textContent = 'Important';

    const empty_p = document.createElement('p');

    sidebarMenu.appendChild(div);
    sidebarMenu.appendChild(p);
    sidebarMenu.appendChild(empty_p);

    sidebar.appendChild(sidebarMenu);

    const notes = document.createElement('div');
    notes.classList.add('sidebar_title');

    const notes_title = document.createElement('p');
    notes_title.classList.add('notes_title');
    notes_title.textContent = "Notes";
    notes_title.onclick = openNotes;

    const notes_img = document.createElement('img');
    notes_img.src = "./icons/notes.png";
    notes_img.alt = "notes";
    notes_img.onclick = () => {
        openModal('notes_create')
    };

    notes.appendChild(notes_title);
    notes.appendChild(notes_img);

    sidebar.appendChild(notes);

    const todo = document.createElement('div');
    todo.classList.add('sidebar_title');

    const todo_title = document.createElement('p');
    todo_title.textContent = "To Do";

    const todo_img = document.createElement('img');
    todo_img.src = "./icons/add.png";
    todo_img.alt = "add";

    todo.appendChild(todo_title);
    todo.appendChild(todo_img);

    sidebar.appendChild(todo);

    const sidebar_subcategories = document.createElement('div');
    sidebar_subcategories.classList.add('sidebar_subcategories');

    sidebar.appendChild(sidebar_subcategories);

    return sidebar;
}

function createSort(name, id, alt) {
    const sort = document.createElement('div');
    sort.classList.add('sort');
    sort.setAttribute('id', `${id}`);

    const sort_name = document.createElement('p');
    sort_name.textContent = `${name}`

    const sort_img = document.createElement('img');
    sort_img.src = './icons/sort.png';
    sort_img.alt = `${alt}`

    sort.appendChild(sort_name);
    sort.appendChild(sort_img);

    return sort;
}

function createMainContentHeader(name) {
    const div = document.createElement('div');
    div.classList.add('header_main');

    const title = document.createElement('p');
    title.textContent = `${name}`;

    const sort = createSort('Sort Date', 'date_sort', 'sort by date');
    const sort2 = createSort('Sort Priority', 'priority_sort', 'sort by priority');

    div.appendChild(title);
    div.appendChild(sort);
    div.appendChild(sort2);

    return div;
}

function createAddTaskButton() {
    const div = document.createElement('div');
    div.classList.add('add_task');

    const img = document.createElement('img');
    img.src = './icons/add.png';
    img.alt = 'add task';

    const p = document.createElement('p');
    p.textContent = 'Add Task';

    div.appendChild(img);
    div.appendChild(p);

    div.onclick = () => {
        openModal('create')
    };

    return div;
}

// function createTask(obj)

function createMainContent() {
    const main_content = document.createElement('div');
    main_content.classList.add('main_content');

    main_content.appendChild(createMainContentHeader('Inbox'));
    main_content.appendChild(createAddTaskButton());

    return main_content;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    main.appendChild(createSidebar());
    main.appendChild(createMainContent());

    return main;
}

export {
    sidebar_subcategories_elem,
    createMainContentHeader,
    createAddTaskButton,
}

export default createMain;