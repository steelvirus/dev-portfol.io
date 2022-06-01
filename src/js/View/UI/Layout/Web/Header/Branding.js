import {BlinkingCursor} from "../../../Utilities/BlinkingCursor";
import {Stack} from "react-bootstrap";

export class Branding extends React.Component {
    render() {
        return (
            <Stack direction="horizontal" gap={1}>
                <div className="text-white">portfolio@maxlatussek</div>
                <div className="text-primary">~/app</div>
                <div className="text-secondary">$</div>
                <BlinkingCursor color="rgb(230,230,230)" width="8px"/>
            </Stack>
        );
    }
}