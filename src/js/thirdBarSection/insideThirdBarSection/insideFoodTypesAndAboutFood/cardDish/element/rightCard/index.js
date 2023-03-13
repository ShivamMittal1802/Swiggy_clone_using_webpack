import { createDomElement, appendChildIntoParent } from "../../../../../../helper";

export function createDishCardRight(image, subElementRightId, individualId){
    const right = createDomElement({
        elementType:'div',
        elementClass:'foodproduct-img',
        elementId:subElementRightId
    })
    appendChildIntoParent(individualId, [right]);

    const dishImage = createDomElement({
        elementType:'div',
        innerHtml:image
    })
    const add = createDomElement({
        elementType:'div',
        elementClass:'ADD-div',
        innerHtml:'ADD'
    })
    appendChildIntoParent(right.getAttribute('id'), [dishImage, add]);
    return right;
}