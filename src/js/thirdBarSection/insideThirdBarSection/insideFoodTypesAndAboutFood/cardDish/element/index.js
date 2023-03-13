import { createDomElement, appendChildIntoParent } from "../../../../../helper";
import { createDishCardLeft } from "./leftCard";
import { createDishCardRight } from "./rightCard";
// console.log('till here');
export function createDishCard({icon, dishName, price, description, image, subElemenLefttId, subElementRightId, individualId, parentId}){
    const container = createDomElement({
        elementType:'div',
        elementClass:'food-product-div',
        elementId:individualId
    })
    // console.log('till here');
    appendChildIntoParent(parentId, [container]);

    const leftDishCard=createDishCardLeft(icon, dishName, price, description, subElemenLefttId, individualId);
    const righttDishCard=createDishCardRight(image, subElementRightId, individualId);

    appendChildIntoParent(individualId,[leftDishCard,righttDishCard]);
    return container;
}