import {AuthenticationService} from "../../Services/AuthenticationService";
import {AbstractMiddleware} from "genesis-ui-app/src/js/Routing/Middleware/AbstractMiddleware";
import {Response} from "genesis-ui-app/src/js/View/Responses/Response";

export class Auth extends AbstractMiddleware {
    handle(request, next) {
        if (!new AuthenticationService().isAuthenticated()) {
            return new Response().redirectPath('/auth/login', {ref: window.location.href});
        }

        return next(request);
    }
}