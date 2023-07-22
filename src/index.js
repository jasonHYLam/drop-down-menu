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
        return element;

    }



    const dropDownMenu = createElement('p', 'hidden', 'drop-down');
    body.appendChild(dropDownMenu);

}
const hoverBar = document.querySelector("#hover-bar");

hoverBar.addEventListener('mouseover', (e)=>{
    const dropItems = (e.target.closest("#drop-down-container")).querySelectorAll(".drop-item");
    dropItems.forEach((item) =>showElement(item));
})

hoverBar.addEventListener('mouseout', (e)=>{
    const dropItems = (e.target.closest("#drop-down-container")).querySelectorAll(".drop-item");
    dropItems.forEach((item) =>hideElement(item));
})

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}

createDropDownMenu();