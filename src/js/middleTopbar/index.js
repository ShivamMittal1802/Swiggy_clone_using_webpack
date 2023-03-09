import { createDomElement, appendChildIntoParent } from "../helper";
import { addSlash, middleTopbarSpan } from "./middleTopbarSpan/middleTopbar";


export function middleTopbar(){
    const middleTopbarDiv = createDomElement({
        elementType:'div',
        elementClass:'middle-topbar',
        elementId:'middleTopbar'
    })
    document.body.appendChild(middleTopbarDiv);

    // all span elements
    middleTopbarSpan({elementClass:'home', aClass:'homeanchor', aContent:'Home', parentId:middleTopbarDiv.getAttribute('id')});
    // addSlash({slash:'/', parentId: middleTopbarDiv.getAttribute('id')});
    middleTopbarSpan({elementClass:'Bangalore', aClass:'Bangalore-anchor', aContent:'Bangalore', parentId:middleTopbarDiv.getAttribute('id')});
    // addSlash({slash:'/', parentId: middleTopbarDiv.getAttribute('id')});
    middleTopbarSpan({elementClass:'Bannerghatta-Main-Road', aClass:'Bannerghatta-Main-Road-anchor', aContent:'Bannerghatta-Main-Road', parentId:middleTopbarDiv.getAttribute('id')});
    // addSlash({slash:'/', parentId: middleTopbarDiv.getAttribute('id')});

    const restaurantName = createDomElement({
        elementType:'span',
        elementClass:'Kitchens-of-Punjab',
        elementId:'restaurantName',
        innerHtml:'Kitchens-of-Punjab'
    })

    appendChildIntoParent(middleTopbarDiv.getAttribute('id'), [restaurantName]);
}
