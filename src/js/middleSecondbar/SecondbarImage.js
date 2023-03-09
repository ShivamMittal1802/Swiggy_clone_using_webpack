import { createDomElement, appendChildIntoParent } from "../helper";

export function SecondbarImageSection(parentId){
    const imageSectionDiv = createDomElement({
        elementType:'div',
        elementClass:'secondbar-image-section',
        elementId:'middleSecondbarImageDiv',
        innerHtml:'<img src="healthyfood.jpg" alt="healthyfood" class="secondbar-image">'
    })
    appendChildIntoParent(parentId, [imageSectionDiv]);

    // const imageSection = createDomElement({
    //     elementType:'img',
    //     elementClass:'secondbar-image',
    //     elementId:'imageSection',
    // })
}