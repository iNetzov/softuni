import page from "../node_modules/page/page.mjs";

import { homePage } from "./views/homeView.js";
import { loginPage } from "./views/loginView.js";
import { moviesPage } from "./views/moviesView.js";
import {renderMiddleware} from '../src/middleweares/renderMiddleware.js'


page(renderMiddleware);
page('/',homePage);
page('/movies',moviesPage);
page('/login',loginPage);
page.start();