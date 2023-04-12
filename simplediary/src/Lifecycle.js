import React, {useEffect, useState} from 'react';

const UnmountTest = () => {
    useEffect(() => {
        console.log("Mount!");

        // unmount 시 발생하는 콜백
        return () => {
            console.log("Unmount");
        }
    },[])

    return <div>Unmount Testing Component</div>
}

const Lifecycle = () => {
    // const [count, setCount] = useState(0);
    // const [text, setText] = useState("");

    // useEffect(() => {
    //     console.log("Mount!");
    // }, []);

    // useEffect(() => {
    //     console.log("Update");
    // })

    // useEffect(() => {
    //     console.log(`count is update: ${count}`);
    // }, [count]);

    // useEffect(() => {
    //     console.log(`text is update: ${text}`);
    // }, [text]);

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (<div style={ {padding: 20}}>
        {/* <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div> */}

        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnmountTest />}
    </div>
    );
}

export default Lifecycle;