export function newGoods(goods) {
    //card
    const article = document.createElement('article');
    article.classList.add('card');
    //image
    const img = document.createElement('img');
    img.classList.add('section-4-img-card');
    img.src = goods.img;
    //descriptionCard
    const descDiv = document.createElement('div');
    descDiv.classList.add('info-card');
    //name
    const name = document.createElement('p');
    name.innerHTML = goods.title;
    name.style.marginBottom = '0';
    //description
    const description = document.createElement('p');
    description.textContent = goods.description;
    description.style.margin = '0';
    //price
    const price = document.createElement('p');
    price.textContent = goods.price + ' грн';

    descDiv.appendChild(name);
    descDiv.appendChild(description);
    descDiv.appendChild(price);
    article.appendChild(img);
    article.appendChild(descDiv);

    return article;
}