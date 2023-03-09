import { createDomElement, appendChildIntoParent } from "../../../helper";

export function iconsList({parentId, elementId, src}){
    const makeIcon = createDomElement({
        elementType:'a',
        elementClass:'rightfooter-icon',
        elementId:elementId
    })
    
    const iconImage = createDomElement({
        elementType:'img',
        elementClass:'facebook-icon',
        elementId:'iconImage',
        src:src
    })
    appendChildIntoParent(makeIcon.getAttribute('id'), [iconImage]);

    return makeIcon;
}