const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'this is post two'},
    // {Title: 'Post Three', Body: 'this is post three'}
];

function createPost(post) {
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000)
    });
};

function getPost() {
    setTimeout(function () {
        let output = '';
        
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000)
}

createPost({Title: 'Post Three', Body: 'this is post three'})
.then(getPost)
.catch(function (error) {
    console.log(error);
});