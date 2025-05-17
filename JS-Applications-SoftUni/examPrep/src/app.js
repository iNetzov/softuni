import page from "../node_modules/page/page.mjs";


import { authMiddleware } from "./middlewares/authMiddleware.js";
import {navigationMiddleware} from './middlewares/navigationMiddleware.js';
import {renderMiddleware} from './middlewares/renderMiddleware.js';
import { renderCreateCar } from "./views/createCarView.js";
import { renderDeleteCar } from "./views/deleteCarView.js";
import { renderCarDetails } from "./views/detailsCarView.js";
import { renderEditCar } from "./views/editCarView.js";
import { renderHome } from "./views/homeView.js";
import { renderListing } from "./views/listingView.js";
import {renderLogin} from './views/loginView.js';
import { renderLogout } from "./views/logoutView.js";
import { renderMyListing } from "./views/myListingView.js";
import { renderRegister } from "./views/registerView.js";
import { renderSerch } from "./views/serchView.js";

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
 page('/listing/:carId/delete',renderDeleteCar);
page('/my-listing/',renderMyListing);
page('/search',renderSerch);

page.start();