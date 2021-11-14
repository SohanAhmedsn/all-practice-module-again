// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


/* 
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

//user data input 
function userDataInput() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
}


//user data comment 
function userDataComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))
} */

//user data post 
function userDataPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}

function commonUserPeople(json) {
    const ul = document.getElementById('commonUser');
    for (const user of json) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `hi`;
        ul.appendChild(li);
    }
}