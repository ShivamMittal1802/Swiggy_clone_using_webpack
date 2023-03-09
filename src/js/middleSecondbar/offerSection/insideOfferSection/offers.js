import { createDomElement, appendChildIntoParent } from "../../../helper";
import { firstOffer } from "./insideOffers/firstOffers";
import { secondOffer } from "./insideOffers/secondOffer";

export function offersDiv(parentId){
    const offers = createDomElement({
        elementType:'div',
        elementClass:'offers',
        elementId:'offers'
    })
    appendChildIntoParent(parentId, [offers]);

    firstOffer(offers.getAttribute('id'));
    secondOffer(offers.getAttribute('id'));
}