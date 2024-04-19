export function init(itemObj, id, func){
    const fragment = document.createDocumentFragment();

    itemObj.forEach((card) => {
        fragment.appendChild(func(card));
    });
    appendContent(fragment, id);
}

function appendContent(shop, id){
    const el = document.getElementById(id);

    el.appendChild(shop);
}