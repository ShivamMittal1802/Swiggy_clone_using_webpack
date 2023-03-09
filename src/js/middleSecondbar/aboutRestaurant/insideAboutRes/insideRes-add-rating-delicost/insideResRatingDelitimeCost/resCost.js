import { createDomElement, appendChildIntoParent } from "../../../../../helper";
import { descOfFood } from "./insideResCost/DescriptionOfFood";
import { rupeeIconAndCost } from "./insideResCost/rupeeIconAndCost";

export function resCost(parentId){
    const resCostDiv = createDomElement({
        elementType:'div',
        elementClass:'res-cost',
        elementId:'resCostDiv'
    })
    appendChildIntoParent(parentId, [resCostDiv]);

    rupeeIconAndCost(resCostDiv.getAttribute('id'));
    descOfFood(resCostDiv.getAttribute('id'));
}