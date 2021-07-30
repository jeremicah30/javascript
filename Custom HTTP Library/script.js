//where we use the library

const http = new easyHTTP;

//Get Post

http.get('https://jsonplaceholder.typicode.com/posts', function(error, response) {
    console.log(response);
    
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});
