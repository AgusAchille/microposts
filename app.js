import  EasyHTTP from './easyHTTP.js'
import * as UI from './UI.js'

let posts = [];

document.addEventListener('DOMContentLoaded', getPost);
UI.postSubmit.addEventListener('click', submitPost);
UI.postsUI.addEventListener('click', removePost);

async function getPost(){
    try {
        const data = await EasyHTTP.get('http://localhost:3000/posts');
        posts = [...data];
        UI.showPosts(data);
    }
    catch(error){console.log(error)};
}

function submitPost(){
    const post = UI.getInputData();
    
    if(post.body && post.title){
        EasyHTTP.post('http://localhost:3000/posts', post)
            .then(() => {
                getPost();
                UI.clearInputs();
                UI.showAlert('Post added', 'alert alert-success text-center');
            })
            .catch(error => console.log(error));
    }
}

function removePost(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;

        EasyHTTP.delete(`http://localhost:3000/posts/${id}`)
        .then(() => {
            getPost();
            UI.showAlert('Post Deleted', 'alert alert-success text-center');
        })
        .catch(error => console.log(error));


        e.target.parentElement.parentElement.parentElement.remove();
    }
}