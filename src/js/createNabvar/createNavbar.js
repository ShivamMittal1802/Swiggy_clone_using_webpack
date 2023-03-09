import { createDomElement, appendChildIntoParent} from "../helper";
import { headerLeftSection } from "./navbarLeft/headerLeft";
import { headerRightSection } from "./navbarRight/headerRight";

export function createHeader(){
    const header= createDomElement({
        elementType:'header',
        elementClass:'navbar',
        elementId:'headerContainer'
    });
    document.body.appendChild(header);

   const navDiv=createDomElement({
    elementType:"DIV",
    elementClass:"nav",
    elementId:'navDiv',
    innerHtml :""
   });

   appendChildIntoParent(header.getAttribute('id'), [navDiv]);
   headerLeftSection(navDiv.getAttribute('id'));
   headerRightSection(navDiv.getAttribute('id'));
}
