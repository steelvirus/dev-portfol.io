export class BlinkingCursor extends React.Component {
    #timerId;

    constructor(props) {
        super(props);

        this.state = {
            cursorActive: true,
        };
    }

    componentDidMount() {
        const interval = this.props?.interval ?? 550;

        this.#timerId = setInterval(
            () => this.setState({
                cursorActive: !this.state.cursorActive
            }),
            interval
        );
    }

    componentWillUnmount() {
        clearInterval(this.#timerId);
    }

    render() {
        const backgroundColor = this.state.cursorActive ? (this.props?.color ?? 'white') : 'initial';
        const width = this.props?.width ?? '2px';

        return (
            <div className="blinking-cursor"
                 style={{backgroundColor: backgroundColor, width: width}}/>
        );
    }
}