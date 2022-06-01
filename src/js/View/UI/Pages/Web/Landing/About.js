import {Layout} from "../../../Layout/Web/Layout";

export class About extends React.Component {

    render() {
        return (
            <Layout title="About" route={this.props.route}>
                About
            </Layout>
        );
    }
}