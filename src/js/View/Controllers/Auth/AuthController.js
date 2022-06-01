import {AbstractController} from "genesis-ui-app/src/js/View/Controllers/AbstractController";
import {Response} from "genesis-ui-app/src/js/View/Responses/Response";

export class AuthController extends AbstractController {
    static mapRoutes() {
        return {
            '/login': 'login',
        };
    }

    login() {
        return new Response(<div>Login!</div>);
    }
}