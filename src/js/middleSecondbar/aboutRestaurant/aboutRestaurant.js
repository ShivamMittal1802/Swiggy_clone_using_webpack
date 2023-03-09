import { createDomElement, appendChildIntoParent } from "../../helper";
import { resRatingDelicost } from "./insideAboutRes/res-add-rating-delicose";
import { ResName } from "./insideAboutRes/resName";

export function restaurantInfo(parentId){
    const aboutRes = createDomElement({
        elementType:'div',
        elementClass:'about-restaurant',
        elementId:'aboutRes'
    })
    appendChildIntoParent(parentId, [aboutRes]);

    ResName(aboutRes.getAttribute('id'));
    resRatingDelicost(aboutRes.getAttribute('id'));
}