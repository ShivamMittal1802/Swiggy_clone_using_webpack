import { createDomElement, appendChildIntoParent } from "../../helper";

export function middleTopbarSpan({spanClass, aClass, aContent, parentId}){
    const middleTopbar = createDomElement({
        elementType:'span',
        elementClass:spanClass,
        elementId:'middleTopbarSpan'
    })
    appendChildIntoParent(parentId, [middleTopbar]);

    const anchortag = createDomElement({
        elementType:'a',
        elementClass:aClass,
        elementId:'anchortag',
        innerHtml:aContent + '&nbsp/&nbsp'
    })
    appendChildIntoParent(middleTopbar.getAttribute('id'), [anchortag]);
}

// export function addSlash({slashClass, parentId}){
//     const slash = createDomElement({
//         elementType:'span',
//         elementClass:slashClass,
//         elementId:'slash',
//         innerHtml:'&nbsp/&nbsp'
//     })
//     appendChildIntoParent(parentId, [slash]);
// }