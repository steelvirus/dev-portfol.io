import {HeaderNav} from "./HeaderNav";

export class Header extends React.Component {
    render() {
        return (
            <div id="header" className="border-bottom border-secondary position-sticky top-0">
                <HeaderNav route={this.props.route}/>
            </div>
        );
    }
}