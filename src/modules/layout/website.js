import createFooter from "./footer";
import createHeader from "./header";
import createMain from "./main";


function initializeWebsite() {
    const content = document.querySelector('.content');

    console.log(content);

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    return content;
}

export default initializeWebsite;