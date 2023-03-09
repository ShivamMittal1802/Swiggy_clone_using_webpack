import { createDomElement, appendChildIntoParent } from "../../../helper";

export function createFoodTypeList({parentId, elementClass, elementId, innerHTML}){
    const createList = createDomElement({
        elementType:'li',
        elementClass:elementClass, 
        elementId:elementId, 
        innerHtml:innerHTML
    })
    appendChildIntoParent(parentId, [createList]);
    return createList;
}