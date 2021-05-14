import React from 'react';
import Icons from '../icons';
const InputField = (props) => {
    return (
        <div className="w-full h-5/6 flex self-center relative">
            <Icons.Search className="absolute bottom-0 right-0 rounded-sm bg-yellow-500 text-gray-900 hover:text-yellow-300 px-1"/>
            <input
                className={props?.className + ' w-full rounded-sm focus:outline-none focus:ring focus:border-blue-300 text-gray-800 px-2'}
                style={props?.style}
                type={props?.type}
            />
        </div>

    )   
}

export default InputField