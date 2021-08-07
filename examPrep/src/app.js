import page from "../node_modules/page/page.mjs";


import { authMiddleware } from "./middlewares/authMiddleware.js";
import {navigationMiddleware} from './middlewares/navigationMiddleware.js';
import {renderMiddleware} from './middlewares/renderMiddleware.js';
import { renderCreateCar } from "./views/createCarView.js";
import { renderCarDetails } from "./views/detailsCarView.js";
import { renderEditCar } from "./views/editCarView.js";
import { renderHome } from "./views/homeView.js";
import { renderListing } from "./views/listingView.js";
import {renderLogin} from './views/loginView.js';
import { renderLogout } from "./views/logoutView.js";
import { renderRegister } from "./views/registerView.js";

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/',renderHome)
page('/listing',renderListing)
page('/login',renderLogin);
page('/register',renderRegister)
page('/logout',renderLogout);
page('/create',renderCreateCar);
page('/listing/:carId',renderCarDetails);
 page('/listing/:carId/edit',renderEditCar);
// page('/listing/:carId/delete',renderCarDetails);
page.start();