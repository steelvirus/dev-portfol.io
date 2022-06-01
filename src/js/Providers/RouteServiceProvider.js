import routes from "../../routes";
import dash from "../../routes/dash";
import auth from "../../routes/auth";
import {AbstractServiceProvider} from "genesis-ui-app/src/js/Providers/AbstractServiceProvider";

export class RouteServiceProvider extends AbstractServiceProvider {
    boot() {

    }

    register() {
        this.loadRoutes(routes);
        this.loadRoutes(dash);
        this.loadRoutes(auth);
    }
}