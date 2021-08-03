const http = new EasyHTTP;

//Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//Create data 
const data = {
    name: 'Mai Licup',
    username: 'Mai',
    email: 'mai@gmail.com'
}

//Create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//Update post
// http.put('https://jsonplaceholder.typicode.com/users/3', data)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//Delete post
http.delete('https://jsonplaceholder.typicode.com/users/3')
    .then(data => console.log(data))
    .catch(error => console.error(error));
