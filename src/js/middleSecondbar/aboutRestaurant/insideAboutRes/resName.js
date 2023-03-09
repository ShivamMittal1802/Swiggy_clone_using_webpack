import { createDomElement, appendChildIntoParent } from "../../../helper";

export function ResName(parentId){
    const resNameDiv = createDomElement({
        elementType:'div',
        elementClass:'res-name',
        elementId:'resNameDiv',
        innerHtml:'Kitchens of Punjab'
    })
    appendChildIntoParent(parentId, [resNameDiv]);
}