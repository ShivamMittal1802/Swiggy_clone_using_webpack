import { createDomElement, appendChildIntoParent } from "../../helper";
import { rightFooterIconsDiv } from "./insideRightFooter/rightFooterIcons";

export function rightFooterDiv(parentId){
    const rightFooterDiv = createDomElement({
        elementType:'div',
        elementClass:'right-footer',
        elementId:'rightFooterDiv'
    })
    appendChildIntoParent(parentId, [rightFooterDiv]);

    rightFooterIconsDiv(rightFooterDiv.getAttribute('id'));
}