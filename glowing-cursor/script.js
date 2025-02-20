document.addEventListener(`mousemove`, (event) =>{
    let mouseX = event.clientX -20 ;
    let mouseY = event.clientY - 20;

    let cursor = document.querySelector(`.glowing`);

    cursor.style.left = mouseX + `px`;
    cursor.style.top = mouseY + `px`;

    

});