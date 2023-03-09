import { createDomElement, appendChildIntoParent } from "../../../helper";

// This will make the whole list of right navbar items

export function createList({innerHtml, parentId, innerHtml1, elementClass, elementId}){
    const listItem = createDomElement({
        elementType:'li',
        elementId:elementClass
    })
    appendChildIntoParent(parentId, [listItem]);


    const listItemsDiv = createDomElement({
        elementType:'div',
        elementClass:'icon-content-items',
        elementId:elementId,
        innerHtml: innerHtml
    })
    appendChildIntoParent(listItem.getAttribute('id'), [listItemsDiv]);


    const listItemSpan = createDomElement({
        elementType:'span',
        elementClass:'icon-content-text',
        elementId:'ListItemSpan',
        innerHtml:innerHtml1
    })
    appendChildIntoParent(listItemsDiv.getAttribute('id'), [listItemSpan]);

    return listItem;
}