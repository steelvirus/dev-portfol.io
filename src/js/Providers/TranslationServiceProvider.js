import translations from "../../resources/lang/index"
import {AbstractServiceProvider} from "genesis-ui-app/src/js/Providers/AbstractServiceProvider";

export class TranslationServiceProvider extends AbstractServiceProvider {

    boot() {
    }

    register() {
        for (const [locale, groupItems] of Object.entries(translations)) {
            this.addTranslations(groupItems, locale);
        }
    }
}