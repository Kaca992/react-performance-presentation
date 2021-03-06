import React, { useState } from "react";

export const ChildrenPage: React.FC = (props) => {
    const [state, setState] = useState(0);

    return <div>
        <div className="button" onClick={() => setState(prev => prev + 1)}>Click me ({state})</div>
        <LabelComponent label="Test">
            <div>Inner content</div>
        </LabelComponent>
        <LabelComponent label="Dummy">
            <DummyElement />
        </LabelComponent>
        <LabelComponent label="Memmo dummy">
            <MemoDummyElement />
        </LabelComponent>
        <LabelComponent label="DummyElementUsesState">
            <DummyElementUsesState count={state} />
        </LabelComponent>
    </div>;
}

interface LabelComponentProps {
    label: string;
}

class LabelComponent extends React.PureComponent<LabelComponentProps> {
    public componentDidUpdate() {
        console.log("Label updated", this.props.label);
    }

    // public shouldComponentUpdate(nextProps: Readonly<LabelComponentProps>): boolean {
    //     return this.props.label !== nextProps.label;
    // }

    public render() {
        return <div style={{margin: '20px', display: 'flex'}}>
            <div style={{color: 'red',}}>{this.props.label}: </div>
            {this.props.children}
        </div>
    }
}

const DummyElement: React.FC = () => <div>Inner content 2</div>;
const MemoDummyElement = React.memo(DummyElement);
const DummyElementUsesState: React.FC<{count: number}> = (props) => <div>Count: {props.count}</div>;