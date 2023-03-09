import { createDomElement, appendChildIntoParent } from "../../../helper";
import { createFoodTypeList } from "./helper";

export function foodTypeDiv(parentId){
    const foodTypeDiv = createDomElement({
        elementType:'div',
        elementClass:'foodtype',
        elementId:'foodTypeDiv'
    })
    appendChildIntoParent(parentId, [foodTypeDiv])

    const unorderList = createDomElement({
        elementType:'ul',
        elementClass:'foodtypes-list',
        elementId:'foodTypeUnorderList'
    })
    appendChildIntoParent(foodTypeDiv.getAttribute('id'), [unorderList]);

    const foodTypeList = [
        {parentId:unorderList.getAttribute('id'), elementClass:'marginof10', elementId:'foodTpye1', innerHTML:'Recommended'},
        {parentId:unorderList.getAttribute('id'), elementClass:'marginof10', elementId:'foodTpye2', innerHTML:'Starters'},
        {parentId:unorderList.getAttribute('id'), elementClass:'marginof10', elementId:'foodTpye3', innerHTML:'Rice & Indian bread'},
        {parentId:unorderList.getAttribute('id'), elementClass:'marginof10', elementId:'foodTpye4', innerHTML:'Premium Thalis'},
        {parentId:unorderList.getAttribute('id'), elementClass:'marginof10', elementId:'foodTpye5', innerHTML:'Desert & Beverages'}
    ]

    const foodTypeCreateList = foodTypeList.map(createFoodTypeList);
    appendChildIntoParent(unorderList.getAttribute('id'), foodTypeCreateList);
}