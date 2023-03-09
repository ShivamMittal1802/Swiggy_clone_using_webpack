import { createDomElement, appendChildIntoParent } from "../../helper";

export function vegOnlyDiv(parentId){
    const searchDiv = createDomElement({
        elementType:'div',
        elementClass:'vegonly',
        elementId:'vegOnlyDiv'
    })
    appendChildIntoParent(parentId, [searchDiv]);

    const squareIconSpan = createDomElement({
        elementType:'span',
        elementClass:'square-icon',
        elementId:'squareIconSpan',
        innerHtml:'<i class="fa-regular fa-square"></i>'
    })
    appendChildIntoParent(searchDiv.getAttribute('id'), [squareIconSpan]);
    
    
    const vegContentSpan = createDomElement({
        elementType:'span',
        elementClass:'veg-content',
        elementId:'vegContentSpan',
        innerHtml:'Veg Only'
    })
    appendChildIntoParent(searchDiv.getAttribute('id'), [vegContentSpan]);


}