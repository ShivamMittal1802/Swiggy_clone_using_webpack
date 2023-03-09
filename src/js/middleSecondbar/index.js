import { createDomElement, appendChildIntoParent } from "../helper";
import { restaurantInfo } from "./aboutRestaurant/aboutRestaurant";
import { offerSection } from "./offerSection/offerSection";
import { SecondbarImageSection } from "./SecondbarImage";

export function middleSecondbar(){
    const middleSecondbar = createDomElement({
        elementType:'div',
        elementClass:'secondbarsection',
        elementId:'middleSecondbar'
    })
    document.body.appendChild(middleSecondbar);
    SecondbarImageSection(middleSecondbar.getAttribute('id'));
    restaurantInfo(middleSecondbar.getAttribute('id'));
    offerSection(middleSecondbar.getAttribute('id'));
}