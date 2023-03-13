import { createDomElement, appendChildIntoParent } from "../../../helper";
import { createRestaurantDishesCart } from "./cardDish";
// import { foodProductDiv } from "./foodProductDiv/foodProductDiv";

export function aboutFoodDiv(parentId){
    const aboutFoodDiv = createDomElement({
        elementType:'div',
        elementClass:'aboutfood',
        elementId:'aboutFoodDiv'
    })
    appendChildIntoParent(parentId, [aboutFoodDiv]);
    
    
    const heading = createDomElement({
        elementType:'h2',
        elementClass:'heading',
        elementId:'heading',
        innerHtml:'Recommended'
    })
    appendChildIntoParent(aboutFoodDiv.getAttribute('id'), [heading]);
    
    
    const itemCount = createDomElement({
        elementType:'div',
        elementClass:'itemcount',
        elementId:'itemcount',
        innerHtml:'21 ITEMS'
    })
    appendChildIntoParent(aboutFoodDiv.getAttribute('id'), [itemCount]);

    // foodProductDiv(aboutFoodDiv.getAttribute('id'));
    
    createRestaurantDishesCart(aboutFoodDiv.getAttribute('id'))
    // console.log('till here');

}