export const createDomElement= ({elementType, elementId, elementClass, src, innerHtml=''})=> {
    const createElement = document.createElement(elementType);
    if(elementClass ) createElement.setAttribute("class", elementClass);
    if(elementId ) createElement.setAttribute("id", elementId);
    if(src) createElement.setAttribute("src", src);
    createElement.innerHTML=innerHtml;
    return createElement;
}


export const appendChildIntoParent= (parentId, childrens) => {
    const parent = document.getElementById(parentId);
    parent.append(...childrens);
}
