import {Routes} from "genesis-ui-app/src/js/Routing/Factory/Routes";
import {AuthController} from "../js/View/Controllers/Auth/AuthController";
import {RequireCookieConsent} from "../js/Routing/Middleware/RequireCookieConsent";

/**
 * @param {Routes} routes
 * @returns {Routes}
 */
export default function (routes) {
    routes.controller(AuthController).middleware(RequireCookieConsent).prefix('/auth').name('auth');

    return routes;
}