let cursor = document.querySelector(`.glowing`);

document.addEventListener(`mousemove`, (event) =>{
    cursor.style.display = `block`;
    let mouseX = event.clientX -20 ;
    let mouseY = event.clientY - 20;
    cursor.style.left = mouseX + `px`;
    cursor.style.top = mouseY + `px`;



});

document.addEventListener(`mouseleave`, ()=>{
    cursor.style.display = `none`;
});