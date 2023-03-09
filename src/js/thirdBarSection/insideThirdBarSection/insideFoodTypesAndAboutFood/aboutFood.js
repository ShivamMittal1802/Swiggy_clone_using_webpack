import { createDomElement, appendChildIntoParent } from "../../../helper";

export function aboutFoodDiv(parentId){
    const aboutFoodDiv = createDomElement({
        elementType:'div',
        elementClass:'aboutfood',
        elementId:'aboutFoodDiv'
    })
    appendChildIntoParent(parentId, [aboutFoodDiv]);
    
    
    const heading = createDomElement({
        elementType:'h2',
        elementClass:'heading',
        elementId:'heading',
        innerHtml:'Recommended'
    })
    appendChildIntoParent(aboutFoodDiv.getAttribute('id'), [heading]);
    
    
    const itemCount = createDomElement({
        elementType:'div',
        elementClass:'itemcount',
        elementId:'itemcount',
        innerHtml:'21 ITEMS'
    })
    appendChildIntoParent(aboutFoodDiv.getAttribute('id'), [itemCount]);


    
}