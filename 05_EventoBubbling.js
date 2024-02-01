console.log('hola');

const cardElement = document.getElementById('Card');
const titleCard = document.getElementById('titleCard');
const infoCard = document.getElementById('infoCard');
const descriptionCard = document.getElementById('descriptionCard');


cardElement.addEventListener('click', (e) =>{
    // console.log(e);
    e.stopPropagation();
    console.log(cardElement);
})

titleCard.addEventListener('click', (e) =>{
    // console.log(e);
    // STOP PROPAGATION sirve para evitar el burbujeo, esto quiere decir que no llame al padre cuando se da el evento del hijo, importa lo mas especifico
    e.stopPropagation();
    console.log(titleCard);
})

infoCard.addEventListener('click', (e) =>{
    // console.log(e);
    e.stopPropagation();
    console.log(infoCard);
})

descriptionCard.addEventListener('click', (e) =>{
    // console.log(e);
    e.stopPropagation();
    console.log(descriptionCard);
})