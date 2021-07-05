// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e) {
//     console.log('hello world');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    console.log('Clicked')
}

//form

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//clear the input value
taskInput.value = '';

// form.addEventListener('submit', runEvent);

//fires everytime you press a key
// task.addEventListener('keydown',runEvent);
// //fires everytime you press a key and release
// task.addEventListener('keyup',runEvent);
// //fires everytime you press a key and release
// task.addEventListener('keypress',runEvent);

//focus --click the input
// taskInput.addEventListener('focus', runEvent);
//blur -- click outside the form
// taskInput.addEventListener('blur', runEvent);
// //cut --option cut
// taskInput.addEventListener('cut', runEvent);
// //paste
// taskInput.addEventListener('paste', runEvent);
//Input --everything you do will just be input
// taskInput.addEventListener('input', runEvent);
//change
select.addEventListener('change', runEvent);


function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    //log what u type
    // console.log(e.target.value);

    //log in the window
    // heading.innerText = e.target.value;

    // console.log(taskInput.value);

    // e.preventDefault();
}
