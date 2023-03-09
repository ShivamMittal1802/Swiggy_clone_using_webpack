import { createDomElement, appendChildIntoParent } from "../../../helper";


export function navbarLeftItems(parentId){
    const navbarLeftItemsDiv=createDomElement({
        elementType:'div',
        elementClass:'location-div',
        elementId:'navbarLeeftItemsDiv'
    })
    appendChildIntoParent(parentId, [navbarLeftItemsDiv])

    const navbarLeftOther=createDomElement({
        elementType:'span',
        elementClass:'other',
        elementId:'navbarLeeftOther',
        innerHtml:'Other'
    })
    appendChildIntoParent(navbarLeftItemsDiv.getAttribute('id'), [navbarLeftOther])


    const navbarLeftLocation=createDomElement({
        elementType:'span',
        elementClass:'location',
        elementId:'navbarLeeftLocation',
        innerHtml:'Kundalahalli, Brookefield, Bengaluru,'
    })
    appendChildIntoParent(navbarLeftItemsDiv.getAttribute('id'), [navbarLeftLocation])
    
    
    const navbarLeftDownArrow=createDomElement({
        elementType:'span',
        elementClass:'down-arrow',
        elementId:'navbarLeeftDownArrow'
    })
    appendChildIntoParent(navbarLeftItemsDiv.getAttribute('id'), [navbarLeftDownArrow])
    

    const downArrowButton = createDomElement({
        elementType:'i',
        elementClass:'fa-solid fa-angle-down',
        elementId:'downArrowButton'
    })

    appendChildIntoParent(navbarLeftDownArrow.getAttribute('id'), [downArrowButton])
}