const post = document.querySelector('#posts');
const title = document.querySelector('#title');
const body = document.querySelector('#body');
const idInput = document.querySelector('#id');
const postSubmit = document.querySelector('.post-submit');
const forState = 'add';

export function showPosts(posts) {
    let output = '';

    for(const post of posts){
        output +=
            `<div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link data.id="${post.id}">
                        <i class="fa fa-pencil"></i>
                    </a>
                    <a href="#" class="delete card-link data.id="${post.id}">
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>`
        
        }

    post.innerHTML = output;
    }
