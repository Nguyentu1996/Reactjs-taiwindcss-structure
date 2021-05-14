import React from 'react';
function Wrapper(props) {
    return <div className="container mx-auto h-wrapper px-2">
        {props.children}
    </div>
}

export default Wrapper;