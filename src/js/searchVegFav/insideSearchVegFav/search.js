import { createDomElement, appendChildIntoParent } from "../../helper";

export function searchDiv(parentId){
    const searchDiv = createDomElement({
        elementType:'div',
        elementClass:'search',
        elementId:'searchDiv'
    })
    appendChildIntoParent(parentId, [searchDiv]);

    const searchIconSpan = createDomElement({
        elementType:'span',
        elementClass:'search-icon',
        elementId:'searchIconSpan',
        innerHtml:'<i class="fa-solid fa-magnifying-glass"></i>'
    })
    appendChildIntoParent(searchDiv.getAttribute('id'), [searchIconSpan]);
    
    const searchContentSpan = createDomElement({
        elementType:'span',
        elementClass:'search-icon',
        elementId:'searchContentSpan',
        innerHtml:' Search for dishes...'
    })
    appendChildIntoParent(searchDiv.getAttribute('id'), [searchContentSpan]);
    
}