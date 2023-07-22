import "./style.css";
console.log('o');
console.log('p');


const createDropDownMenu = () => {
    const body = document.querySelector('body');
    const createElement = (elementType, textContent, ...classes) => {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;
        console.log(classes);

        classes.map(className => newElement.classList.add(className));
        return newElement;
    }
    const container = createElement('div', '', 'drop-down-container');
    const hoverBarElement = createElement('div', 'Hover on me', 'hover-bar');
    const item1 = createElement('div', "about", 'drop-down-item', 'hidden')
    const item2 = createElement('div', "contact", 'drop-down-item', 'hidden')
    const item3 = createElement('div', "content", 'drop-down-item', 'hidden')
    const item4 = createElement('div', "wiki", 'drop-down-item', 'hidden')
    const item5 = createElement('div', "play", 'drop-down-item', 'hidden')

    container.appendChild(hoverBarElement);
    container.appendChild(item1);
    container.appendChild(item2);
    container.appendChild(item3);
    container.appendChild(item4);
    container.appendChild(item5);

    body.appendChild(container);

    const dropDownContainer = document.querySelector(".drop-down-container");
    const hoverBar = document.querySelector(".hover-bar");

    dropDownContainer.addEventListener('mouseover', (e)=>{
        const dropItems = (e.target.closest(".drop-down-container")).querySelectorAll(".drop-item");
        dropItems.forEach((item) =>showElement(item));
    })

    dropDownContainer.addEventListener('mouseout', (e)=>{
        const dropItems = (e.target.closest("#drop-down-container")).querySelectorAll(".drop-item");
        dropItems.forEach((item) =>hideElement(item));
    })

    function hideElement(element) {
        element.classList.add('hidden');
    }

    function showElement(element) {
        element.classList.remove('hidden');
    }


}


createDropDownMenu();