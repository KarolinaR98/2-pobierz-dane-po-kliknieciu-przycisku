let button = document.getElementById('get-data');
let body = document.querySelector('body');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = 'Post ID: ' + data.id;
            pUserId.innerText = 'User ID: ' + data.userId;
            pTitle.innerText = 'Title: ' + data.title;
            pBody.innerText = 'Post body: ' + data.body;

            body.append(pId, pUserId, pTitle, pBody, hr);
            
        })
        .catch(error => {
            console.error(error);
        })
}

button.addEventListener('click', getData);