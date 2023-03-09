import { createDomElement, appendChildIntoParent } from "../../helper";

export function emptyCartDiv(parentId){
    const emptyCart = createDomElement({
        elementType:'div',
        elementClass:'emptycart',
        elementId:'emptyCartDiv'
    })
    appendChildIntoParent(parentId, [emptyCart]);

    const emptyCartName = createDomElement({
        elementType:'div',
        elementClass:'emptycart-name',
        elementId:'emptyCartName',
        innerHtml:'Cart Emtpy'
    })
    appendChildIntoParent(emptyCart.getAttribute('id'), [emptyCartName]);


    const emptyCartImageDiv = createDomElement({
        elementType:'div',
        elementClass:'emptycart-imgdiv',
        elementId:'emptyCartImageDiv',
        innerHtml:'<img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" class="emptycart-img">'
    })
    appendChildIntoParent(emptyCart.getAttribute('id'), [emptyCartImageDiv])


    const emptyCartContent = createDomElement({
        elementType:'div',
        elementClass:'emptycart-content',
        elementId:'emptyCartContent',
        innerHtml:'Good food is always cooking! <br> Go ahead, order some yummy items from the menu.'
    })
    appendChildIntoParent(emptyCart.getAttribute('id'), [emptyCartContent])
}