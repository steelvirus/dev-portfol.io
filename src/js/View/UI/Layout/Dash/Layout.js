import {ThemeProvider} from "react-bootstrap";
import {Genesis} from "genesis-ui-app/src/js/Application/Genesis";

export class Layout extends React.Component {
    componentDidMount() {
        if (this.props?.title) {
            document.title = Genesis.getInstance().env('name') + ' - ' + this.props.title;
        }
    }

    render() {
        return (
            <div id="dash">
                <ThemeProvider
                    breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']}>
                    <div id="outerApp">
                        {this.props?.modals ?? ''}
                    </div>
                    <div id="innerApp" className="dpio-layout">
                        {this.props.children}
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}