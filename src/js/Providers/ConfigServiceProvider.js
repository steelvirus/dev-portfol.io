import app from "../../config/app";
import {AbstractServiceProvider} from "genesis-ui-app/src/js/Providers/AbstractServiceProvider";

export class ConfigServiceProvider extends AbstractServiceProvider {
    boot() {

    }

    register() {
        this.loadConfig('app', app);
    }
}