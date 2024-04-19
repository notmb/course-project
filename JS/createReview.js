function newReview(review) {
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