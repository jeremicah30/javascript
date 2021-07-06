//set local storage item --items wil not be deleted even when you exit your browser
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '20');

// //set session storage item --items wil be deleted once you exit your browser
// // sessionStorage.setItem('name', 'Karl');

// // //remove from storage
// // localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear localStorage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', 
function(e){
    const task = document.getElementById('task');

    localStorage.setItem('task', task);
    
    e.preventDefault();
})

