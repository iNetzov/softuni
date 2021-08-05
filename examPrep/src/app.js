import page from "../node_modules/page/page.mjs";


import {navigationMiddleware} from './middlewares/navigationMiddleware.js';
import {renderMiddleware} from './middlewares/renderMiddleware.js';
import {renderLogin} from './views/loginView.js';

page(navigationMiddleware);
page(renderMiddleware);
page('/',()=>console.log('home'))
page('/login',renderLogin);
page('/register',() => console.log('registerPage'));
page.start();