import React, {useState,useEffect} from 'react'


function ReactHook1() {
    const [count, setCount] = useState(0);


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 10000)}>
                    Click me
                </button>
            </div>
        </div>
    )
}

export default ReactHook1
