import { createDomElement, appendChildIntoParent } from "../../../../helper";
import { foodProductImg } from "./insideFoodProductDiv/foodProductImg";
import { withoutImgDiv } from "./insideFoodProductDiv/withoutImgDiv";

export function foodProductDiv(parentId){
    const foodProductDiv = createDomElement({
        elementType:'div',
        elementClass:'food-product-div',
        elementId:'foodProductDiv'
    })
    appendChildIntoParent(parentId, [foodProductDiv]);

    withoutImgDiv(foodProductDiv.getAttribute('id'));
    foodProductImg(foodProductDiv.getAttribute('id'));
}