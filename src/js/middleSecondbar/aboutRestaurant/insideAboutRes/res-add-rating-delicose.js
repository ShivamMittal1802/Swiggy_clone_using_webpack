import { createDomElement, appendChildIntoParent } from "../../../helper";
import { resDelitimeCost } from "./insideRes-add-rating-delicost/res-delitime-cost";
import { resAddress } from "./insideRes-add-rating-delicost/resAddress";
import { resCustomerAddress } from "./insideRes-add-rating-delicost/resCustomerAddress";

export function resRatingDelicost(parentId){
    const resRatingDelicostDiv = createDomElement({
        elementType:'div',
        elementClass:'res-address-rating-delicost-time',
        elementId:'resRatingDelicostDiv'
    })
    appendChildIntoParent(parentId, [resRatingDelicostDiv]);
    
    resAddress(resRatingDelicostDiv.getAttribute('id'));
    resCustomerAddress(resRatingDelicostDiv.getAttribute('id'));
    resDelitimeCost(resRatingDelicostDiv.getAttribute('id'));

}