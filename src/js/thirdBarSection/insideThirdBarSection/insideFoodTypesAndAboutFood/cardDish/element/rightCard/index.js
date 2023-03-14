
import cart from "../../../../../../../model/cart";
import { createDomElement, appendChildIntoParent } from "../../../../../../helper";
import { showData } from "../../../../emptyCart";

export function createDishCardRight(image, subElementRightId, individualId, btnId, quantityId){
    const right = createDomElement({
        elementType:'div',
        elementClass:'foodproduct-img',
        elementId:subElementRightId
    })
    appendChildIntoParent(individualId, [right]);

    const dishImage = createDomElement({
        elementType:'div',
        innerHtml:image
    })
    
    const add = createDomElement({
        elementType:'div',
        elementClass:'ADD-div',
        elementId:btnId
    })
    appendChildIntoParent(right.getAttribute('id'), [dishImage, add]);

    const removeBtn = createDomElement({
        elementType:'button',
        elementClass:'remove-btn',
        innerHtml:'-'
    })
    removeBtn.addEventListener("click", removeItem);

    function removeItem(){
        // console.log(document.getElementById(quantityId).innerHTML);
        if(document.getElementById(quantityId).innerHTML>0){
            document.getElementById(quantityId).innerHTML--;
            const count = document.getElementById(quantityId).innerHTML;
            cart[individualId]=count;
            showData();
            console.log(cart);
        }
        
    }


    const quantity = createDomElement({
        elementType:'p',
        elementClass:'quatity',
        elementId:quantityId,
        innerHtml:'0'
    })

    const addBtn = createDomElement({
        elementType:'button',
        elementClass:'add-btn',
        innerHtml:'+'
    })
    addBtn.addEventListener("click", addItem);

    function addItem(){
        document.getElementById(quantityId).innerHTML++;
        const count = document.getElementById(quantityId).innerHTML;
        cart[individualId]=count;
        showData();
        console.log(cart);
    }

    
    
    // console.log(add.getAttribute('id'))
    appendChildIntoParent(add.getAttribute('id'), [removeBtn, quantity, addBtn]);
    return right;
}

