import {ThemeProvider} from "react-bootstrap";
import {Header} from "./Header/Header";
import {Footer} from "./Footer";
import {Page} from "./Page/Page";
import {Genesis} from "genesis-ui-app/src/js/Application/Genesis";

export class Layout extends React.Component {
    componentDidMount() {
        if (this.props?.title) {
            document.title = Genesis.getInstance().env('name') + ' - ' + this.props.title;
        }
    }

    render() {
        return (
            <div id="web">
                <ThemeProvider
                    breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']}>
                    <div id="outerApp">
                        {this.props?.modals ?? ''}
                    </div>
                    <div id="innerApp" className="dpio-layout">
                        <Header route={this.props.route}/>
                        <Page>
                            {this.props.children}
                        </Page>
                        <Footer/>
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}