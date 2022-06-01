import {Routes} from "genesis-ui-app/src/js/Routing/Factory/Routes";
import {DashboardController} from "../js/View/Controllers/Dash/DashboardController";
import {Auth} from "../js/Routing/Middleware/Auth";
import {RequireCookieConsent} from "../js/Routing/Middleware/RequireCookieConsent";
import {Genesis} from "genesis-ui-app/src/js/Application/Genesis";

/**
 * @param {Routes} routes
 * @returns {Routes}
 */
export default function (routes) {
    const dashDomain = Genesis.getInstance().env('dashDomain');

    routes.middleware([Auth, RequireCookieConsent]).domain(dashDomain).group((routes) => {

        routes.add('/', [DashboardController, 'overview']);

        routes.controller(DashboardController).prefix('/dashboard').name('dash.dashboard');

        return routes;
    });

    return routes;
}