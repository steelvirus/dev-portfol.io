import {Home} from "../../UI/Pages/Web/Landing/Home";
import {About} from "../../UI/Pages/Web/Landing/About";
import {AbstractController} from "genesis-ui-app/src/js/View/Controllers/AbstractController";
import {Response} from "genesis-ui-app/src/js/View/Responses/Response";

export class HomeController extends AbstractController {
    static mapRoutes() {
        return {
            'home': 'home',
            'about': 'about'
        };
    }

    /**
     * @param {Request} request
     * @returns {Response}
     */
    home(request) {
        return new Response(<Home route={request.route().getName()}/>);
    }

    /**
     * @param {Request} request
     * @returns {Response}
     */
    about(request) {
        return new Response(<About route={request.route().getName()}/>);
    }
}