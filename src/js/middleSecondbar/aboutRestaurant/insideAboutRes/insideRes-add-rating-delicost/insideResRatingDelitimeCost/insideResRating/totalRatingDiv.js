import { createDomElement, appendChildIntoParent } from "../../../../../../helper";

export function totalRatingDiv(parentId){
    const totalRatingDiv = createDomElement({
        elementType:'div',
        elementClass:'total-rating-div',
        elementId:'totalRatingDiv',
        innerHtml:'500+ Ratings'
    })
    appendChildIntoParent(parentId, [totalRatingDiv]);
}