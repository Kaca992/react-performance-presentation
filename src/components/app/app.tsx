import React, { useRef, useEffect, useState } from 'react';

interface AppProps {

}

const testObject = {text: 'Dinoslav'};
export const App: React.FC = (props: AppProps) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log("Rendering App", count, count2);
    useEffect(() => {
        if (count === 1) {
            testUpdateAsync();
        }

        if (count === 3) {
            testUpdateSync();
        }

        if (count === 5) {
            setCount(prev => prev + 1);
            setCount2(prev => prev + 1);
        }
    })

    async function testUpdateAsync() {
        console.log("Started test update async");
        await Promise.resolve("Test");
        setCount(prev => prev + 1);
        setCount2(prev => prev + 1);
    }

    function testUpdateSync() {
        console.log("Started test update sync");
        setCount(prev => prev + 1);
        setCount2(prev => prev + 1);
    }

   
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <Counter count={count} onClick={() => setCount(prev => prev + 1)} test={testObject} />
    </div>;
}

const Counter: React.FC<{count: number, test: {text: string}, onClick: () => void}> = (props) => {
    console.log("Rendering Counter", props);
    const previous = useRef(props);

    return <div style={{margin: '20px', backgroundColor: '#ffff00'}} onClick={props.onClick}>
        Counter: {props.count}
    </div>
}
