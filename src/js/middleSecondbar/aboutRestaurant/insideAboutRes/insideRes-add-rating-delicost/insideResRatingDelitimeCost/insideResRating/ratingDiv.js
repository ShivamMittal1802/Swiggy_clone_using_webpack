import { createDomElement, appendChildIntoParent } from "../../../../../../helper";

export function ratingDiv(parentId){
    const ratingDiv = createDomElement({
        elementType:'div',
        elementClass:'rating-div',
        elementId:'ratingDiv'
    })
    appendChildIntoParent(parentId, [ratingDiv]);

    const starSpan = createDomElement({
        elementType:'span',
        elementClass:'star',
        elementId:'starSpan',
        innerHtml:'<i class="fa-sharp fa-solid fa-star" style="color: white;"></i>'
    })
    appendChildIntoParent(ratingDiv.getAttribute('id'), [starSpan]);

    const ratingCountSpan = createDomElement({
        elementType:'span',
        elementClass:'rating-count',
        elementId:'ratingCountSpan',
        innerHtml:' 4.0'
    })
    appendChildIntoParent(ratingDiv.getAttribute('id'), [ratingCountSpan]);
}