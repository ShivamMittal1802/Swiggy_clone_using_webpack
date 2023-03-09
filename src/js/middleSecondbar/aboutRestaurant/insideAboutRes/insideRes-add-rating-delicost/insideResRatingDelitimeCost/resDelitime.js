import { createDomElement, appendChildIntoParent } from "../../../../../helper";
import { deliTime } from "./insideResDelitime/Delitime";

export function resDelitime(parentId){
    const resDelitimeDiv= createDomElement({
        elementType:'div',
        elementClass:'res-delitime',
        elementId:'resDelitimeDiv'
    })
    appendChildIntoParent(parentId, [resDelitimeDiv]);

    deliTime(resDelitimeDiv.getAttribute('id'));
}