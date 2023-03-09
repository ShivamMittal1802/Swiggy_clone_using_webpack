import { createDomElement, appendChildIntoParent } from "../../../../../../helper";

export function rupeeIconAndCost(parentId){
    const iconAndCostDiv = createDomElement({
        elementType:'div',
        elementClass:'rating-div',
        elementId:'iconAndCost'
    })
    appendChildIntoParent(parentId, [iconAndCostDiv]);

    const rupeeIconSpan = createDomElement({
        elementType:'span',
        elementClass:'star',
        elementId:'rupeeIconSpan',
        innerHtml:'<i class="fa-solid fa-indian-rupee-sign" style="color: white;"></i>'
    })
    appendChildIntoParent(iconAndCostDiv.getAttribute('id'), [rupeeIconSpan]);
    
    
    const moneySpan = createDomElement({
        elementType:'span',
        elementClass:'rating-count',
        elementId:'moneySpan',
        innerHtml:'500'
    })
    appendChildIntoParent(iconAndCostDiv.getAttribute('id'), [moneySpan]);
}