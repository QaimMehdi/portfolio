import React from "react";
import ballPlaceholder from "../../assets/tech/ball_placeholder.png";

const StaticBall = ({ icon }) => {
    return (
        <div className='w-full h-full relative flex justify-center items-center'>
            <img
                src={ballPlaceholder}
                alt='ball-placeholder'
                className='w-full h-full object-contain absolute'
            />
            <img
                src={icon}
                alt='tech-icon'
                className='w-1/2 h-1/2 object-contain absolute z-10 opacity-80'
            />
        </div>
    );
};

export default StaticBall;
