document.getElementById('button-1').addEventListener('click', getText);
document.getElementById('button-2').addEventListener('click', getJson);
document.getElementById('button-3').addEventListener('click', getExApi);

//Get Text
// function getText() {
//     fetch('sample.txt')
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(data) {
//         console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
// };

//Get JSON 
    // function getJson() {
    //     fetch('samp.json')
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(data) {
    //         console.log(data);

    //         let output = '';
    //         data.forEach(function(post) {
    //             output += `<li>${post.title}</li>`;

    //             document.getElementById('output').innerHTML = output;
    //         })
    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     })
    // };

//Get external API
// function getExApi() {
//     fetch('https://api.github.com/users')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);

//         let output = '';
//         data.forEach(function(data) {
//             output += `<li>${data.login}</li>`;

//             document.getElementById('output').innerHTML = output;
//         })
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
// }


//------------------------ES6 VERSION--------------------------------

//GET TEXT
function getText() {
    fetch('sample.txt')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err))
};

//Get JSON ES6
function getJson() {
    fetch('samp.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let output = '';
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;

            document.getElementById('output').innerHTML = output;
        })
    })
    .catch(err => console.log(err));
};

//Get external API
function getExApi() {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let output = '';
        data.forEach(function(data) {
            output += `<li>${data.login}</li>`;

            document.getElementById('output').innerHTML = output;
        })
    })
    .catch(err => console.log(err))
}
