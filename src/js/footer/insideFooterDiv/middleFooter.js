import { createDomElement, appendChildIntoParent } from "../../helper";

export function middleFooterDiv(parentId){
    const middleFooterDiv = createDomElement({
        elementType:'div',
        elementClass:'middle-footer',
        elementId:'middleFooterDiv',
        innerHtml:'© 2023 Swiggy'
    })
    appendChildIntoParent(parentId, [middleFooterDiv]);
}