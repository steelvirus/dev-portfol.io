import {RouteServiceProvider} from "./Providers/RouteServiceProvider";
import {TranslationServiceProvider} from "./Providers/TranslationServiceProvider";
import {AuthServiceProvider} from "./Providers/AuthServiceProvider";
import {ConfigServiceProvider} from "./Providers/ConfigServiceProvider";
import {Genesis} from "genesis-ui-app/src/js/Application/Genesis";

export class App {
    #elementId;
    /** @type {Genesis} **/
    #genesis;

    constructor(elementId) {
        this.#elementId = elementId;
        this.#genesis = new Genesis({
            name: 'Max Latussek/Portfolio',
            domain: 'latus.local',
            dashDomain: 'dash.latus.local',
            api: 'http://api.latus.local:80/v1/'
        });
    }

    start() {
        this.#genesis.register([RouteServiceProvider, TranslationServiceProvider, AuthServiceProvider, ConfigServiceProvider]);

        this.#genesis.init().then(() => {
            this.#genesis.handle(this.#elementId);
        });
    }
}