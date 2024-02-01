const cardElement = document.getElementById('Card');

cardElement.addEventListener('click', (e) =>{
    // console.log(e.target);

    if(e.target.classList.contains('CardClass')) {
        console.log('Llamaste a un card');
    }
    if(e.target.classList.contains('titleCardClass')) {
        console.log('Llamaste a un titleCardClass');
    }
    if(e.target.classList.contains('descriptionCardClass')) {
        console.log('Llamaste a un descriptionCardClass');
    }
    if(e.target.classList.contains('infoCardClass')) {
        console.log('Llamaste a un infoCardClass');
    }

    // 
})
