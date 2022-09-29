import createFooter from "./footer";
import createHeader from "./header";
import createMain from "./main";
import { modalNotes, modalNotesCreate, modalTaskCreate, taskDetailsModal } from "./modals";

function initializeWebsite() {
    const content = document.querySelector('.content');

    console.log(content);

    content.appendChild(modalNotesCreate());
    content.appendChild(modalTaskCreate());
    content.appendChild(modalNotes());
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    return content;
}

export default initializeWebsite;