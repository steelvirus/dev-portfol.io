import {OverviewDashboard} from "../../UI/Pages/Dash/OverviewDashboard";
import {StatisticsDashboard} from "../../UI/Pages/Dash/StatisticsDashboard";
import {AbstractController} from "genesis-ui-app/src/js/View/Controllers/AbstractController";
import {Response} from "genesis-ui-app/src/js/View/Responses/Response";

export class DashboardController extends AbstractController {
    static mapRoutes() {
        return {
            '/statistics': 'statistics',
            '/overview': 'overview'
        };
    }

    overview(request) {
        return new Response(<OverviewDashboard/>);
    }

    statistics(request) {
        return new Response(<StatisticsDashboard/>);
    }

}