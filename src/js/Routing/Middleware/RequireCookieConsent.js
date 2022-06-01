import {AbstractMiddleware} from "genesis-ui-app/src/js/Routing/Middleware/AbstractMiddleware";
import {CookieConsentService} from "genesis-ui-app/src/js/Services/CookieConsentService";
import {AbortResponse} from "genesis-ui-app/src/js/View/Responses/AbortResponse";

export class RequireCookieConsent extends AbstractMiddleware {
    handle(request, next) {
        const consentService = new CookieConsentService();

        if (!consentService.hasUserGivenConsent('required')) {
            return new AbortResponse(() => {
                alert('You have to consent to required technical cookies to continue');
            });
        }

        return next(request);
    }
}