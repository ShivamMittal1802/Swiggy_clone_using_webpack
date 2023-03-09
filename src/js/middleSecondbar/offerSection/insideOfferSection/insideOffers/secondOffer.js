import { createDomElement, appendChildIntoParent } from "../../../../helper";

export function secondOffer(parentId){
    const offerDiv = createDomElement({
        elementType:'div',
        elementClass:'offer',
        elementId:'secondofferDiv'
    })
    appendChildIntoParent(parentId, [offerDiv]);

    const secondOfferSpan = createDomElement({
        elementType:'span',
        elementClass:'first-offer-icon',
        elementId:'secondOfferSpan',
        innerHtml:'<i class="fa-sharp fa-solid fa-gift" id="icons"></i>'
    })
    appendChildIntoParent(offerDiv.getAttribute('id'), [secondOfferSpan]);

    const secondOfferDiv = createDomElement({
        elementType:'div',
        elementClass:'discount-desc',
        elementId:'secondOfferDiv',
        innerHtml:'Free Gulab Jamun on orders above ₹520'
    })
    appendChildIntoParent(offerDiv.getAttribute('id'), [secondOfferDiv]);
}