import "./style.css";
console.log('o');
console.log('p');

const dropDownContainer = document.querySelector("#drop-down-container");


dropDownContainer.addEventListener('mouseover', (e)=>{
    const dropItems = (e.target.closest("#drop-down-container")).querySelectorAll(".drop-item");
    console.log(dropItems);
    // console.log(e.target.querySelectorAll(".drop-item"));

    toggleDisplay(e.target);

})

function toggleDisplay(element) {
    (element.classList.contains("hidden"))? element.classList.remove("hidden") : element.classList.add("hidden");

}