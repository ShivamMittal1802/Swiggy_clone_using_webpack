import { createDomElement, appendChildIntoParent } from "../../../../helper";

export function resCustomerAddress(parentId){ 
    const resCustomerAddress = createDomElement({
        elementType:'div',
        elementClass:'res-cust-address',
        elementId:'resCustomerAddress',
        innerHtml:'Bilekahalli, Bannerghatta Main Road'
    })
    appendChildIntoParent(parentId, [resCustomerAddress]);

    const changeOutletSpan = createDomElement({
        elementType:'span',
        elementClass:'change-outlet',
        elementId:'changeOutletSpan'
    })
    appendChildIntoParent(resCustomerAddress.getAttribute('id'), [changeOutletSpan]);

    const chagneOutletAnchor = createDomElement({
        elementType:'a',
        elementClass:'change-outlet-anchor',
        elementId:'changeOutletAnchor',
        innerHtml:' | Change outlet '
    })
    appendChildIntoParent(changeOutletSpan.getAttribute('id'), [chagneOutletAnchor])

    const middleDownArrowSpan = createDomElement({
        elementType:'span',
        elementClass:'middledown-arrow',
        elementId:'middleDownArrowSpan',
        innerHtml:'<i class="fa-solid fa-angle-down"></i>'
    })
    appendChildIntoParent(resCustomerAddress.getAttribute('id'), [middleDownArrowSpan]);


}