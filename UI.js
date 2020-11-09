export const postsUI = document.querySelector('#posts');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
export const postSubmit = document.querySelector('.post-submit');
const postsContainer = document.querySelector('.posts-container');
const cardForm = document.querySelector('.card-form');
let forState = 'add';
export const cancelButton = createCancelButton();

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
        title: titleInput.value.trim(),
        body: bodyInput.value.trim()
    }
}

export function clearInputs(){
    titleInput.value = '';
    bodyInput.value = '';
}

export function showAlert(message, className){
    const div = document.createElement('div');
    div.className = className;
    div.textContent = message;

    postsContainer.insertBefore(div, postsUI);
    
    setTimeout(() => {div.remove()}, 3000);
}

export function fillInputs({body, title}){
    bodyInput.value = body,
    titleInput.value = title
}

export function setState(state){
    if(state === 'edit'){
        forState = 'edit';
        postSubmit.classList.remove('btn-primary');
        postSubmit.classList.add('btn-warning');
        postSubmit.textContent = 'Update Post'

        cardForm.insertBefore(cancelButton, postSubmit.nextSibling)
    }
    else if (state === 'add'){
        clearInputs();
        cancelButton.remove();

        forState = 'add';
        postSubmit.classList.remove('btn-warning');
        postSubmit.classList.add('btn-primary');
        postSubmit.textContent = 'Post it'
    }
}

function createCancelButton(){
    const button = document.createElement('button');
    button.className = 'post-cancel btn btn-secondary btn-block'
    button.textContent = 'Cancel Edit'

    return button
}

export function getState(){
    return forState;
}