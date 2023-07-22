import "./style.css";
console.log('o');
console.log('p');

const dropDownContainer = document.querySelector("#drop-down-container");
dropDownContainer.addEventListener('mouseover', (e)=>{
    console.log(e.target);
    toggleDisplay(e.target);

})

function toggleDisplay(element) {
    (element.classList.contains("hidden"))? element.classList.remove("hidden") : element.classList.add("hidden");

}