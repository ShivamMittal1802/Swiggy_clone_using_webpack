import { createDomElement, appendChildIntoParent } from "../../../../helper";

export function resAddress(parentId){ 
    const resAddress = createDomElement({
        elementType:'div',
        elementClass:'res-address',
        elementId:'resAddress',
        innerHtml:'Punjabi, North Indian'
    })
    appendChildIntoParent(parentId, [resAddress])
}