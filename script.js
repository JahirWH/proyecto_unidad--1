const menuButton = document.querySelector ('.header__menu');
const deslice = document.querySelector ('.nav__list');

function deslizarElemento (button, elemento, slide) {
    
    button.addEventListener( 'click' , function () {
        
        if (elemento.style.maxHeight === '0px' || elemento.style.maxHeight === '') {
            elemento.style.maxHeight = slide
            elemento.style.transition = '0.3s ease'
            elemento.style.padding = '8px'
        } else {
            elemento.style.maxHeight = '0px'
            elemento.style.padding = '0px'
        }
    })
}

deslizarElemento (menuButton, deslice , '250px');


// Seleccionamos todos los botones y las opciones
const selectorButtons = document.querySelectorAll('.selector__button');
const selectorOptions = document.querySelectorAll('.selector__container');

// Recorremos los botones y agregamos el evento de clic
selectorButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Obtenemos la opción correspondiente usando el mismo índice
        const option = selectorOptions[index];

        // Aquí puedes aplicar tu lógica para mostrar u ocultar la opción relacionada
        if (option.style.maxHeight === '0px' || option.style.maxHeight === '') {
            option.style.maxHeight = '250px';
            option.style.transition = '0.3s ease';
            option.style.padding = '10px'
        } else {
            option.style.maxHeight = '0px';
            option.style.padding = '0 10px'
        } 
    });
});












