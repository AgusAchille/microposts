import  EasyHTTP from './easyHTTP.js'
import * as UI from './UI.js'

let posts = [];
let currentPost = null
document.addEventListener('DOMContentLoaded', getPost);
UI.postSubmit.addEventListener('click', submitPost);
UI.postsUI.addEventListener('click', removePost);
UI.postsUI.addEventListener('click', enterEditState);
UI.cancelButton.addEventListener('click', exitEditState);

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
        if(UI.getState() === 'add'){   
            EasyHTTP.post('http://localhost:3000/posts', post)
                .then(() => {
                    getPost();
                    UI.clearInputs();
                    UI.showAlert('Post added', 'alert alert-success text-center');
                })
                .catch(error => console.log(error));
        }
        else if (UI.getState() === 'edit'){
            if(post.body !== currentPost.body || post.title !== currentPost.title){
                EasyHTTP.put(`http://localhost:3000/posts/${currentPost.id}`, post)
                .then(() => {
                    UI.setState('add');
                    getPost();
                    UI.clearInputs();
                    UI.showAlert('Post updated', 'alert alert-success text-center');
                })
                .catch(error => console.log(error));
            }
        } 
    }
}

function removePost(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('delete')){
        if(confirm('Are you sure you want to Delete?')){
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
}

function enterEditState(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('edit')){
        if(UI.getState() === 'add'){
            const id = parseInt(e.target.parentElement.dataset.id);
            
            currentPost = posts.find(post => post.id === id);
            
            UI.fillInputs(currentPost);
            UI.setState('edit');
        }
    }
}

function exitEditState(){
    currentPost = null;
    UI.setState('add');
}