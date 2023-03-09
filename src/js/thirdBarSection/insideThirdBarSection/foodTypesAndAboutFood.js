import { createDomElement, appendChildIntoParent } from "../../helper";
import { aboutFoodDiv } from "./insideFoodTypesAndAboutFood/aboutFood";
import { foodTypeDiv } from "./insideFoodTypesAndAboutFood/foodTypes";

export function foodTypesAndAboutFood(parentId){
    const foodTypesAndAboutFood = createDomElement({
        elementType:'div',
        elementClass:'foodtypes-aboutfood',
        elementId:'foodTypesAndAboutFood'
    })
    appendChildIntoParent(parentId, [foodTypesAndAboutFood]);

    foodTypeDiv(foodTypesAndAboutFood.getAttribute('id'));
    aboutFoodDiv(foodTypesAndAboutFood.getAttribute('id'));
}