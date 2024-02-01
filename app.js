// // console.log('hola');

// // let documento = document;


// // console.log(1);

// // documento.addEventListener('DOMContentLoaded', ()=> {
// //     console.log(2);
// // })

// // console.log(3);

// const elementNavigation = document.getElementById('navigation');

// console.log(elementNavigation);

// elementNavigation.addEventListener('mouseout', () =>{
//     console.log('Saliste del elemento');
// })

// const elementButton = document.getElementById('btnElement');

// console.log(elementButton);

// elementButton.addEventListener('click', ()=>{
//     console.log('Hizo click al boton');
//     alert('Hola')
// })

// const btnCreate = document.getElementById('btnCreate');
// const container = document.getElementById('container')

// console.log(btnCreate);

// // FUNCION QUE VA A CREAR EL ELEMENTO

// btnCreate.addEventListener('click', createElement);

// function createElement(){
//     const element = document.createElement('h1');
//     element.textContent='Soy un encabezado creado con un listener';
//     // container.appendChild(element);
//     printElement(element);

// }
// // FUNCION QUE VA A COLOCAR EL ELEMENTO

// function printElement(element){
//     container.appendChild(element);
// }


// btnCreate.addEventListener('click', (e) => {
//     console.log(e.target);
// });


// // Declarar variables
// const btnSubmitElement = document.getElementById('btnSubmit');
// const inputName = document.getElementById('inputName');
// const inputLastName = document.getElementById('inputLastName');
// const message = document.getElementById('message');
// const containerForm = document.getElementById('containerForm');


// inputName.addEventListener('blur',(e)=>{
//     console.log(event,e.target.value);
//     console.log('Evento blur');

// })

// inputName.addEventListener('change',(e)=>{
//     console.log(event,e);
//     console.log('Evento change');
// })

// inputLastName.addEventListener('input',(e)=>{
//     console.log(event,e);
//     console.log('Evento input');
//     message.textContent=e.target.value;

// })

// containerForm.addEventListener('submit', (e) => {
//     e.preventDefault;
//     // El prevent default evita que se refresque la pagina
//     console.log(e.target[0].value);
//     console.log(e.target[1].value);
//     console.log(e.target[2].value);
// })




// console.log(btnSubmitElement);

// btnSubmitElement.addEventListener('click',()=>{
//     alert('Envio un ingreso al formulario')
// })

// Cuando ingreso al input y salgo, carga


window.addEventListener('scroll', (e) =>{
    console.log(e);
    console.log(window.scrollY);
    const scrollTop = window.scrollY;

    if(scrollTop>1000){
        console.log('Aparece elemento');
    } else{
        console.log('No aparece elemento');
    }
})

// GetBoundingClientRect()

