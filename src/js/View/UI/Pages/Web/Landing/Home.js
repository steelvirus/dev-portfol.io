import {Layout} from "../../../Layout/Web/Layout";
import {Breadcrumb, BreadcrumbItem, Card, Stack} from "react-bootstrap";
import {Goto} from "genesis-ui-app/src/js/Routing/Goto";

export class Home extends React.Component {

    goto(routeName, event = null) {
        if (event) {
            event.preventDefault();
        }

        Goto.route(routeName);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout title="Home" route={this.props.route}>
                <Card border="dark">
                    <Card.Header className="bg-dark text-white">
                        <Stack direction="horizontal">
                            <div className="text-secondary">./run --location="</div>
                            <Breadcrumb listProps={{className: 'm-0'}}>
                                <BreadcrumbItem active className="text-light">
                                    Home
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="text-secondary">"</div>

                        </Stack>
                    </Card.Header>
                    <Card.Body>
                    </Card.Body>
                </Card>
            </Layout>
        );
    }
}