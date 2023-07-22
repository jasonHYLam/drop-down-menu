import "./style.css";
console.log('o');
console.log('p');

const dropDownContainer = document.querySelector("#drop-down-container");


dropDownContainer.addEventListener('mouseover', (e)=>{
    const dropItems = (e.target.closest("#drop-down-container")).querySelectorAll(".drop-item");
    dropItems.forEach((item) =>showElement(item));
    // console.log(e.target.querySelectorAll(".drop-item"));
})

dropDownContainer.addEventListener('mouseout', (e)=>{
    const dropItems = (e.target.closest("#drop-down-container")).querySelectorAll(".drop-item");
    dropItems.forEach((item) =>hideElement(item));
    // console.log(e.target.querySelectorAll(".drop-item"));
})

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}