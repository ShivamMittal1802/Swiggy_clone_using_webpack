import { createDomElement, appendChildIntoParent } from "../../../../../helper";
import { ratingDiv } from "./insideResRating/ratingDiv";
import { totalRatingDiv } from "./insideResRating/totalRatingDiv";

export function resRating(parentId){
    const resRatingDiv = createDomElement({
        elementType:'div',
        elementClass:'res-rating',
        elementId:'resRatingDiv'
    })
    appendChildIntoParent(parentId, [resRatingDiv]);

    ratingDiv(resRatingDiv.getAttribute('id'));
    totalRatingDiv(resRatingDiv.getAttribute('id'))
}