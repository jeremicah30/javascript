document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //Create a object 
    const xhr = new XMLHttpRequest();

    //Open --where we want to specify the type pf request
    xhr.open('GET', 'data.txt', 'yes');         // type of req, file, asynchronous (true/ false)

    xhr.onload = function(){
        //what it wants to do
        if (this.status === 200) {
            console.log('READYSTATE', xhr.readyState);
            // console.log(this.responseText); // //Output in the console

            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    //If there is a error
    xhr.onerror =  function() {
        console.log('Error');
    };

    xhr.send();
};




