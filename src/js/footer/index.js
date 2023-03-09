import { createDomElement, appendChildIntoParent } from "../helper";
import { leftFooterDiv } from "./insideFooterDiv/leftFooter";
import { middleFooterDiv } from "./insideFooterDiv/middleFooter";
import { rightFooterDiv } from "./insideFooterDiv/rightFooter";

export function footer(){
    const footerDiv = createDomElement({
        elementType:'footer',
        elementClass:'footerdiv',
        elementId:'footerDiv'
    })
    document.body.appendChild(footerDiv);

    leftFooterDiv(footerDiv.getAttribute('id'));
    middleFooterDiv(footerDiv.getAttribute('id'));
    rightFooterDiv(footerDiv.getAttribute('id'));
}