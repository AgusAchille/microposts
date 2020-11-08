import  EasyHTTP from './easyHTTP.js'
import * as UI from './UI.js'

document.addEventListener('DOMContentLoaded', getPost);

function getPost(){
    EasyHTTP.get('http://localhost:3000/posts')
        .then((data) => UI.showPosts(data))
        .catch((error) => console.log(error));
}