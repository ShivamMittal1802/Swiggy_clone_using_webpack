import { createDomElement, appendChildIntoParent } from "../../../helper";
import { iconsList } from "./helper";

// console.log("run1");
export function rightFooterIconsDiv(parentId){
    // console.log("run2");
    const rightFooterIconsDiv = createDomElement({
        elementType:'div',
        elementClass:'right-footer-icons',
        elementId:'rightFooterIconsDiv'
    })
    // console.log(parentId);
    appendChildIntoParent(parentId, [rightFooterIconsDiv]);
    const list=[
        {parentId:rightFooterIconsDiv.getAttribute('id'), elementId:'footerIcon1', src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc' },
        {parentId:rightFooterIconsDiv.getAttribute('id'), elementId:'footerIcon2', src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd'},
        {parentId:rightFooterIconsDiv.getAttribute('id'), elementId:'footerIcon3', src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh'},
        {parentId:rightFooterIconsDiv.getAttribute('id'), elementId:'footerIcon4', src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc'}
    ]
    const footerIconsList = list.map(iconsList);
    appendChildIntoParent(rightFooterIconsDiv.getAttribute('id'), footerIconsList);
}