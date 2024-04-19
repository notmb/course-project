export function newReview(review) {
    //review
    const article = document.createElement('article');
    article.classList.add('article-card');
    //name
    const name = document.createElement('h6');
    name.classList.add('r-c-h6');
    name.textContent = review.name;
    //review
    const textReview = document.createElement('p');
    textReview.classList.add('fz14');
    textReview.textContent = review.body;

    article.appendChild(name);
    article.appendChild(textReview);

    return article;
}

export function sendReview(){
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

    name.value = "";
    review.value = "";
}