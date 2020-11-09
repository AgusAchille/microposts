export const postsUI = document.querySelector('#posts');
const title = document.querySelector('#title');
const body = document.querySelector('#body');
const idInput = document.querySelector('#id');
export const postSubmit = document.querySelector('.post-submit');
const postsContainer = document.querySelector('.posts-container');
const forState = 'add';

export function showPosts(posts) {
    let output = '';

    for(const post of posts){
        output +=
            `<div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="delete card-link" data-id="${post.id}">
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>`
        
        }

    postsUI.innerHTML = output;
}

export function getInputData(){
    return {
        title: title.value.trim(),
        body: body.value.trim()
    }
}

export function clearInputs(){
    title.value = '';
    body.value = '';
}

export function showAlert(message, className){
    const div = document.createElement('div');
    div.className = className;
    div.textContent = message;

    postsContainer.insertBefore(div, postsUI);
    
    setTimeout(() => {div.remove()}, 3000);
}