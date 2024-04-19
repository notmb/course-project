import { buttonRev, init} from './loading content.js';
import {newGoods} from './createCard.js';
import {newReview} from './createReview.js';
const headerId = document.getElementById('header-menu-id');
const burgerID = document.getElementById('burger');
function toggleMobileMenu() {
    headerId.classList.toggle('open');
}
burgerID.onclick = toggleMobileMenu;


//відображення каталогу
const goods = new XMLHttpRequest();
goods.open('GET', 'https://run.mocky.io/v3/ced24126-e530-48f5-bb23-68efa4a532d1');
goods.responseType = 'json';
const idCatalogShop = 'catalog';
goods.onload = function() {
    const res = goods.response;
    init(res, idCatalogShop, newGoods);
}
goods.send();


// function newReview(review) {
//     //review
//     const article = document.createElement('article');
//     article.classList.add('article-card');
//     //name
//     const name = document.createElement('h6');
//     name.classList.add('r-c-h6');
//     name.textContent = review.name;
//     //review
//     const textReview = document.createElement('p');
//     textReview.classList.add('fz14');
//     textReview.textContent = review.body;

//     article.appendChild(name);
//     article.appendChild(textReview);

//     return article;
// }
//відображення відгуку
const reviews = new XMLHttpRequest();
reviews.open('GET', 'https://jsonplaceholder.typicode.com/comments');
reviews.responseType = 'json';
const idReview = 'reviews-container'
reviews.onload = function() {
    const res = reviews.response;
    const rev = [res[0], res[1]];
    init(rev, idReview, newReview);
}
reviews.send();

//надсилання відгуку
function sendReview(){
    const obj = {};
    obj.postId = 1;

    const name = document.getElementById('reviewer-name');
    obj.name = name.value;

    obj.email = 'mama@gmail.com';

    const review = document.getElementById('review');
    obj.body = review.value;
    
    const k = new XMLHttpRequest();
    k.open('POST', 'https://jsonplaceholder.typicode.com/comments');
    k.responseType = 'json';
    k.send(JSON.stringify(obj));
}
// const buttonRev = document.getElementById('review-button');
buttonRev.addEventListener('click', sendReview);

