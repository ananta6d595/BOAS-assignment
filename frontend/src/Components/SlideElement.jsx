import React from 'react';

const SlideElement = ({ pageLink, imgLink, jeansLabel }) => {
    return (
        <div className='mb-10'>
            <a
                className='inset-0'
                href={pageLink}>

                <div className="relative group overflow-hidden h-[390px] w-80 flex flex-col items-center justify-center shadow-lg  ">
                    <p className="absolute z-10 font-semibold text-xl text-white whitespace-nowrap">
                        {jeansLabel}
                    </p>
                    <img
                        alt={jeansLabel}
                        className="absolute object-cover h-full w-full group-hover:scale-[1.2] duration-[350ms] group-hover:ease-in-out"
                        src={imgLink}
                    />
                    <div className='absolute bg-sky-700 bg-opacity-30 group-hover:bg-opacity-10 inset-0'></div>


                </div>
            </a>
        </div>
    );
};

export default SlideElement;