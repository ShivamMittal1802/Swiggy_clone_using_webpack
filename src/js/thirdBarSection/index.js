import { createDomElement, appendChildIntoParent } from "../helper";
import { emptyCartDiv } from "./insideThirdBarSection/emptyCart";
import { foodTypesAndAboutFood } from "./insideThirdBarSection/foodTypesAndAboutFood";

export function thirdBarSection(){
    const thirdBarSection = createDomElement({
        elementType:'div',
        elementClass:'thirdbarsection',
        elementId:'thirdBarSection'
    })
    document.body.appendChild(thirdBarSection);

    foodTypesAndAboutFood(thirdBarSection.getAttribute('id'));
    emptyCartDiv(thirdBarSection.getAttribute('id'));
}