import { createDomElement, appendChildIntoParent } from "../../../../../../helper";

export function descOfFood(parentId){
    const descOfFood = createDomElement({
        elementType:'div',
        elementClass:'total-rating-div',
        elementId:'descOfFood',
        innerHtml:'cost for two'
    })
    appendChildIntoParent(parentId, [descOfFood]);
}