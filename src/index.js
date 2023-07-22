import "./style.css";
console.log('o');
console.log('p');

const dropDownContainer = document.querySelector("#drop-down-container");
dropDownContainer.addEventListener('mouseover', (e)=>{
    console.log(e.target);

})