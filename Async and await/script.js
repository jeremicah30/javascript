//async makes a promise
    // async function hello() {
    //     // return 'Hello'

    //     const promise = new Promise( (resolve, reject) => {
    //         setTimeout(() => resolve ('Hi, whats up!'), 1000);
    //     });

    //     const error = false;

    //     if (!error) {
    //         const response = await promise;    //Wait until that is resolve
    //         return response;
    //     } else {
    //         await Promise.reject(new Error('Something went wrong'));
    //     }
    // }

    // hello()
    // .then(response => console.log(response))
    // .catch(error => console.log(error));



//fetch with async await
async function getUsers() {
    //await response of the fetch
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    //only proceed when resolve
    const data = await response.json();
    // proceed when the second promise is resolved
    return data;
}

getUsers().then(response => console.log(response));