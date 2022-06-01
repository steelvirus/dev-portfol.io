import {HomeController} from "../js/View/Controllers/Web/HomeController";
import {Routes} from "genesis-ui-app/src/js/Routing/Factory/Routes";
import {ConfigService} from "genesis-ui-app/src/js/Services/ConfigService";

/**
 * @param {Routes} routes
 * @returns {Routes}
 */
export default function (routes) {
    const domain = new ConfigService().get('app.domain');

    console.log(domain)
    routes.domain(domain).group((routes) => {
        routes.add('/', [HomeController, 'home']).name('home');
        routes.add('/about', [HomeController, 'about']).name('about');
    });

    return routes;
}