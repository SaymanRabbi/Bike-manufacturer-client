import React from 'react';
import { useState } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    let [loading, ] = useState(true);
    let [color, ] = useState("#86E7D4");
    return (
        <div className='w-full flex justify-center items-center' style={{minHeight:'100vh'}}>
            <BounceLoader
 color={color} loading={loading}size={60} />
        </div>
    );
};

export default Loading;