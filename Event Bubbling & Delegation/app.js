//Event Bubbling --calls all the element up

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title')
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content')
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card')
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col')
// });

//Event Delgation --calls all the element from pareny

document.body.addEventListener('click', deleteItem);

//1st way to do it
// function deleteItem(e){
//     if(e.target.parentElement.className === 'delete-item secondary-content'){
//         console.log('delete item')
//     }
// };

//2nd way w/c is much better and rec.
function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
};


