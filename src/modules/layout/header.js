


function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const img = document.createElement('img');
    img.classList.add('header_icon')
    img.src = './icons/to-do-list.png';
    img.alt = 'Logo';

    const para = document.createElement('p');
    para.classList.add('header_text');
    para.textContent = "To-Do List";

    header.appendChild(img);
    header.appendChild(para);

    console.log(header);

    return header;
}

export default createHeader;