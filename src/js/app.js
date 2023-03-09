import { createDomElement, appendChildIntoParent} from "./helper";
import { createHeader } from "./createNabvar/createNavbar";
import { middleTopbar } from "./middleTopbar";
import { middleSecondbar } from "./middleSecondbar";
import { footer } from "./footer";
import { searchVegFav } from "./searchVegFav";
import { thirdBarSection } from "./thirdBarSection";

createHeader();
middleTopbar();
middleSecondbar();
searchVegFav();
thirdBarSection();
footer();