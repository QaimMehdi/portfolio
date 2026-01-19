const StaticBall = ({ icon }) => {
    return (
        <div className='w-full h-full relative flex justify-center items-center'>
            <div className='w-[90%] h-[90%] rounded-full bg-[#fff8eb] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.2),10px_10px_20px_rgba(0,0,0,0.1)] flex justify-center items-center'>
                <img
                    src={icon}
                    alt='tech-icon'
                    className='w-1/2 h-1/2 object-contain opacity-80'
                />
            </div>
        </div>
    );
};

export default StaticBall;
