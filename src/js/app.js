import { createDomElement, appendChildIntoParent} from "./helper";
import { createHeader } from "./createNabvar/createNavbar";
import { middleTopbar } from "./middleTopbar";
import { middleSecondbar } from "./middleSecondbar";
import { footer } from "./footer";

createHeader();
middleTopbar();
middleSecondbar();
footer();