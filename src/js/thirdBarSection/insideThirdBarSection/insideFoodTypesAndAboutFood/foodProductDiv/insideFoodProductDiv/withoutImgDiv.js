import { createDomElement, appendChildIntoParent } from "../../../../../helper";

export function withoutImgDiv(parentId){
    const withoutImgDiv = createDomElement({
        elementType:'div',
        elementClass:'without-img',
        elementId:'withoutImgDiv'
    })
    appendChildIntoParent(parentId, [withoutImgDiv]);

    const nonVegIcon = createDomElement({
        elementType:'div',
        elementClass:'nonveg-icon-div',
        elementId:'nonVegIcon',
        innerHtml:'<img src="non-veg.png" alt="" class="non-veg-icon">'
    })
    appendChildIntoParent(withoutImgDiv.getAttribute('id'), [nonVegIcon])


    const foodItemName = createDomElement({
        elementType:'div',
        elementClass:'food-item-name',
        elementId:'foodItemName',
        innerHtml:'Dhaniya Chicken Tikka'
    })
    appendChildIntoParent(withoutImgDiv.getAttribute('id'), [foodItemName])


    const foodPriceDiv = createDomElement({
        elementType:'div',
        elementClass:'food-price',
        elementId:'foodPriceDiv',
        innerHtml:'<i class="fa-solid fa-indian-rupee-sign" id="rupee" ></i>269'
    })
    appendChildIntoParent(withoutImgDiv.getAttribute('id'), [foodPriceDiv]);


    const foodDesDiv = createDomElement({
        elementType:'div',
        elementClass:'food-desc',
        elementId:'foodDesDiv',
        innerHtml:'Succulent chicken marinated & flavoured with fresh coriander, grilled to perfection.'
    })
    appendChildIntoParent(withoutImgDiv.getAttribute('id'), [foodDesDiv])

}