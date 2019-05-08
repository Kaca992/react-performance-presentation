import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

interface BasicOptions {
    option1: boolean;
    option2: boolean;
}

interface AdvancedOptions {
    option1: boolean;
    option2: boolean;
    option3: boolean;
}

export default class GhostPropsContainer extends React.PureComponent<{}, AdvancedOptions> {
    public state: AdvancedOptions = {
        option1: true,
        option2: false,
        option3: true
    }

    componentWillReceiveProps(nextProps: {}) {
        console.log("Container props", nextProps);
    }

    componentDidUpdate() {
        console.log("Container updated");
    }

    public render() {
        return <div style={{display: 'flex', flexDirection: 'column'}}>
            <Link to="/example-4/subpage">Go to subpage 1</Link>
            <Link to="/example-4/subpage1">Go to subpage 2</Link>
            <div onClick={() => this.setState({option3: !this.state.option3})}>Change option 3: {`${this.state.option3}`}</div>
            <Switch>
                <Route path="/example-4/subpage" component={Subpage} />
                <Route path="/example-4/subpage1" render={this._renderSubpage} />
            </Switch>
        </div>;
    }

    private _renderSubpage = () => {
        const basicOptions: BasicOptions = this.state;
        return <MemoSubpage2 {...basicOptions} />;
    } 
}

const Subpage: React.FC = () => <div>Subpage 1</div>;

const Subpage2: React.FC<BasicOptions> = (props) => {
    console.log("Rendered subpage", props);
    return <div>Subpage 2 {props.option1}</div>;
}

const MemoSubpage2 = React.memo(Subpage2);