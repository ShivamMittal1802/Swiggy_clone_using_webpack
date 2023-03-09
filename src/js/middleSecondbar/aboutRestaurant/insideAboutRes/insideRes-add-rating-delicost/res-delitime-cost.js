import { createDomElement, appendChildIntoParent } from "../../../../helper";
import { resCost } from "./insideResRatingDelitimeCost/resCost";
import { resDelitime } from "./insideResRatingDelitimeCost/resDelitime";
import { resRating } from "./insideResRatingDelitimeCost/resRating";

export function resDelitimeCost(parentId){ 
    const resDelitimeCost = createDomElement({
        elementType:'div',
        elementClass:'res-rating-delitime-cost',
        elementId:'resDelitimeCost'
    })
    appendChildIntoParent(parentId, [resDelitimeCost])

    resRating(resDelitimeCost.getAttribute('id'));
    resDelitime(resDelitimeCost.getAttribute('id'));
    resCost(resDelitimeCost.getAttribute('id'));
}