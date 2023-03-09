import { createDomElement, appendChildIntoParent } from "../../../../../../helper";

export function deliTime(parentId){
    const deliTime = createDomElement({
        elementType:'div',
        elementClass:'rating-div',
        elementId:'deliTime',
    })
    appendChildIntoParent(parentId, [deliTime]);

    const timeCountSpan = createDomElement({
        elementType:'span',
        elementClass:'rating-count',
        elementId:'timeCountSpan',
        innerHtml:'49 mins'
    })
    appendChildIntoParent(deliTime.getAttribute('id'), [timeCountSpan]);

    const deliveryTime = createDomElement({
        elementType:'div',
        elementClass:'total-rating-div',
        elementId:'deliveryTime',
        innerHtml:'Delivery Time'
    })
    appendChildIntoParent(deliTime.getAttribute('id'), [deliveryTime]);
}