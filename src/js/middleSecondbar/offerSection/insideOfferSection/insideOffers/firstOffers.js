import { createDomElement, appendChildIntoParent } from "../../../../helper";

export function firstOffer(parentId){
    const offerDiv = createDomElement({
        elementType:'div',
        elementClass:'offer',
        elementId:'offerDiv'
    })
    appendChildIntoParent(parentId, [offerDiv]);

    const firstOfferSpan = createDomElement({
        elementType:'span',
        elementClass:'first-offer-icon',
        elementId:'firstOfferSpan',
        innerHtml:'<i class="fa-sharp fa-solid fa-tag" id="icons"></i>'
    })
    appendChildIntoParent(offerDiv.getAttribute('id'), [firstOfferSpan]);

    const firstOfferDiv = createDomElement({
        elementType:'div',
        elementClass:'discount-desc',
        elementId:'firstOfferDiv',
        innerHtml:'50% off up to ₹90 | Use code WELCOME50'
    })
    appendChildIntoParent(offerDiv.getAttribute('id'), [firstOfferDiv]);
}