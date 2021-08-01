//where we use the library

const http = new easyHTTP;

//Get Post --for get request

// http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
//     console.log(response);
    
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });


//Create Post --for POST request

// const data = {
//     title: 'This is a title',
//     body :'This is the body of the post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
//     if (error) {
//         console.log(error);
//         } else {
//                 console.log(post);
//         }
// });

//Update Post --for put request

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
//     if (error) {
//                 console.log(error);
//                 } else {
//                         console.log(post);
//                 }
//     });


//Delete Post --for delete request

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
    // console.log(response);
    
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});
