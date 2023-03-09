import { createDomElement, appendChildIntoParent } from "../../helper";

export function leftFooterDiv(parentId){
    const leftFooterDiv = createDomElement({
        elementType:'div',
        elementClass:'left-footer',
        elementId:'leftFooterDiv',
    })
    appendChildIntoParent(parentId, [leftFooterDiv]);

    const leftFooterAnchor = createDomElement({
        elementType:'a',
        elementId:'leftFooterAnchor',
        innerHtml:'<img class="footer-swiggy-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza">'
    })
    appendChildIntoParent(leftFooterDiv.getAttribute('id'), [leftFooterAnchor]);
}