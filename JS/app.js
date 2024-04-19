import {init} from './loading content.js';
import {newGoods} from './createCard.js';
import {newReview, sendReview} from './Review.js';

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
const buttonRev = document.getElementById('review-button');
buttonRev.addEventListener('click', sendReview);

