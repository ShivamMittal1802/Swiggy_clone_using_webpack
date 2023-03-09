import { createDomElement, appendChildIntoParent } from "../../helper";

export function favoritesDiv(parentId){
    const favoritesDiv = createDomElement({
        elementType:'div',
        elementClass:'favorites',
        elementId:'favoritesDiv'
    })
    appendChildIntoParent(parentId, [favoritesDiv]);

    const heartIconSpan = createDomElement({
        elementType:'span',
        elementClass:'heart-icon',
        elementId:'heartIconSpan',
        innerHtml:'<i class="fa-regular fa-heart"></i>'
    })
    appendChildIntoParent(favoritesDiv.getAttribute('id'), [heartIconSpan]);

    const favContentSpan = createDomElement({
        elementType:'span',
        elementClass:'fav-content',
        elementId:'favContent',
        innerHtml:'Favorite'
    })
    appendChildIntoParent(favoritesDiv.getAttribute('id'), [favContentSpan])
}