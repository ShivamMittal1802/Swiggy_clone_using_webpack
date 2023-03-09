import { createDomElement, appendChildIntoParent } from "../../../helper";

export function iconsList({parentId, elementId, src}){
    // console.log(src);
    const makeIcon = createDomElement({
        elementType:'a',
        elementClass:'rightfooter-icon',
        elementId:elementId
    })
    appendChildIntoParent(parentId, [makeIcon]);

    const iconImage = createDomElement({
        elementType:'img',
        elementClass:'facebook-icon',
        elementId:'iconImage',
        src:src
    })
    appendChildIntoParent(makeIcon.getAttribute('id'), [iconImage]);

    return makeIcon;
}