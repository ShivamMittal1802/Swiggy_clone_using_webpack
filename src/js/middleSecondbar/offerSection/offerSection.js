import { createDomElement, appendChildIntoParent } from "../../helper";
import { offerHeading } from "./insideOfferSection/offerHeading";
import { offersDiv } from "./insideOfferSection/offers";

export function offerSection(parentId){
    const offerSection = createDomElement({
        elementType:'div',
        elementClass:'offer-section',
        elementId:'offerSection'
    })
    appendChildIntoParent(parentId, [offerSection]);
    offerHeading(offerSection.getAttribute('id'));
    offersDiv(offerSection.getAttribute('id'));
}