import { createDomElement, appendChildIntoParent } from "../helper";
import { favoritesDiv } from "./insideSearchVegFav/favorites";
import { searchDiv } from "./insideSearchVegFav/search";
import { vegOnlyDiv } from "./insideSearchVegFav/vegOnly";

export function searchVegFav(){
    const searchVegFavDiv = createDomElement({
        elementType:'div',
        elementClass:'search-veg-fav',
        elementId:'searchVegFavDiv'
    })
    document.body.appendChild(searchVegFavDiv);

    searchDiv(searchVegFavDiv.getAttribute('id'));
    vegOnlyDiv(searchVegFavDiv.getAttribute('id'));
    favoritesDiv(searchVegFavDiv.getAttribute('id'));
}