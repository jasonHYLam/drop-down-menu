export const createDropDownMenu = () => {
    const body = document.querySelector('body');

    const createElement = (elementType, textContent, ...classes) => {
        const newElement = document.createElement(elementType);
        newElement.textContent = textContent;

        classes.map(className => newElement.classList.add(className));
        return newElement;
    }
    // const container = createElement('div', '', 'drop-down-container');
    const hoverBarElement = createElement('div', 'Hover on me', 'hover-bar');
    const item1 = createElement('div', "about", 'drop-down-item', 'hidden')
    const item2 = createElement('div', "contact", 'drop-down-item', 'hidden')
    const item3 = createElement('div', "content", 'drop-down-item', 'hidden')
    const item4 = createElement('div', "wiki", 'drop-down-item', 'hidden')
    const item5 = createElement('div', "play", 'drop-down-item', 'hidden')

    // container.appendChild(hoverBarElement);
    hoverBarElement.appendChild(item1);
    hoverBarElement.appendChild(item2);
    hoverBarElement.appendChild(item3);
    hoverBarElement.appendChild(item4);
    hoverBarElement.appendChild(item5);

    body.appendChild(hoverBarElement);

    const dropDownContainer = document.querySelector(".drop-down-container");

    body.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains("hover-bar")) {
            const hoverBar = e.target;
            const dropItems = (hoverBar.closest(".hover-bar")).querySelectorAll(".drop-down-item");
            dropItems.forEach((item) =>showElement(item));
        }
    })


    const hoverBarGroup = document.querySelectorAll(".hover-bar");
    hoverBarGroup.forEach((bar) => {
        bar.addEventListener('mouseleave', (e) => {

            if (e.target.classList.contains("hover-bar")) {
                const dropItems = (e.target.closest(".hover-bar")).querySelectorAll(".drop-down-item");
                dropItems.forEach((item) => hideElement(item));

            } 
        })
    })

    function hideElement(element) {
        element.classList.add('hidden');
    }

    function showElement(element) {
        element.classList.remove('hidden');
    }
}

