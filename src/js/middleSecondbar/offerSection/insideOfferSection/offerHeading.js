import { createDomElement, appendChildIntoParent } from "../../../helper";

export function offerHeading(parentId){
    const offerHeading = createDomElement({
        elementType:'div',
        elementClass:'offer-heading',
        elementId:'offerHeading',
        innerHtml:'OFFER'
    })
    appendChildIntoParent(parentId, [offerHeading])
}