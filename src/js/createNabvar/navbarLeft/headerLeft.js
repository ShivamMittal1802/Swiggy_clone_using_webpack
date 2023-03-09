import { createDomElement, appendChildIntoParent } from "../../helper";
import { navbarLogo } from "./navbarLeftSection/navbarLeft1";
import { navbarLeftItems } from "./navbarLeftSection/navbarLeft2";

export function headerLeftSection(parentId){
    const leftHeader = createDomElement({
        elementType:'div',
        elementClass:'left',
        elementId:'navbarLeftSection',
        innerHtml:''
    })
    
    appendChildIntoParent(parentId, [leftHeader])
    navbarLogo(leftHeader.getAttribute('id'))
    navbarLeftItems(leftHeader.getAttribute('id'))
}

