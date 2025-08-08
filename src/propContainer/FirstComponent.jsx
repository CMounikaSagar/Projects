import React, { useEffect, useState } from 'react';

const FirstComponent = (props) => {

    const [screenSize,setScreenSize] = useState({
        width : window.innerWidth,
        height : window.innerHeight,
    });

    const updateScreenSize = () => {
        setScreenSize({
            width : window.innerWidth,
            height : window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize',updateScreenSize)

        return () => {
            window.removeEventListener('resize',updateScreenSize)
        }
    },[])

    return (
        <div>
            FirstComponent
            <h1>Resize the screen size</h1>
            <p>width:{screenSize.width}px</p>
            <p>height:{screenSize.height}px</p>
        </div>
    );
}

export default FirstComponent;