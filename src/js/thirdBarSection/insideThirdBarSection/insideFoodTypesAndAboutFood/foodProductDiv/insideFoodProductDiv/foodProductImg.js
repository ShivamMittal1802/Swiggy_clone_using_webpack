import { createDomElement, appendChildIntoParent } from "../../../../../helper";

export function foodProductImg(parentId){
    const foodProductImg = createDomElement({
        elementType:'div',
        elementClass:'foodproduct-img',
        elementId:'foodProductImg'
    })
    appendChildIntoParent(parentId, [foodProductImg]);


    const foodImageDiv = createDomElement({
        elementType:'div',
        elementId:'foodImageDiv',
        innerHtml:'<img alt="Dhaniya Chicken Tikka" class="imageoffooditem" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u">'
    })
    appendChildIntoParent(foodProductImg.getAttribute('id'), [foodImageDiv]);

    const addDiv = createDomElement({
        elementType:'div',
        elementClass:'ADD-div',
        elementId:'addDiv',
        innerHtml:'ADD'
    })
    appendChildIntoParent(foodProductImg.getAttribute('id'), [addDiv]);
}