import { createDomElement, appendChildIntoParent } from "../../../../../../helper";

export function createDishCardLeft(icon, dishName, price, description, subElementLeftId, individualId){
    const left=createDomElement({
        elementType:'div',
        elementClass:'without-img',
        elementId: subElementLeftId
    });
    appendChildIntoParent(individualId, [left]);


    const nonVegIcon = createDomElement({
        elementType:'div',
        elementClass:'nonveg-icon-div',
        innerHtml:icon
    })
    const dish = createDomElement({
        elementType:'div',
        elementClass:'food-item-name',
        innerHtml:dishName
    })
    const dishPrice = createDomElement({
        elementType:'div',
        elementClass:'food-price',
        innerHtml:price
    })
    const dishDesc = createDomElement({
        elementType:'div',
        elementClass:'food-desc',
        innerHtml:description
    })
    // console.log(left.getAttribute('id'));
    appendChildIntoParent(left.getAttribute('id'), [nonVegIcon, dish, dishPrice, dishDesc]);

    return left;
}