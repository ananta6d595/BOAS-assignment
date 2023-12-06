import React from 'react';

const SlideElement = ({pageLink, imgLink, jeansLabel}) => {
    return (
        <>
            <div className="aspect-[0.7] hover:scale-125 duration-300  relative flex flex-col items-center justify-center mt-4 max-w-[20rem] max-h-[25rem] bg-blue-500 bg-opacity-30 hover:bg-opacity-20  mb-10 shadow-lg">
                <img
                    alt={jeansLabel}
                    loading="lazy"
                    decoding="async"
                    className="-z-10 object-cover absolute h-full w-full"
                    src={imgLink}
                />
                <a
                    className="absolute inset-0 z-10 "
                    href={pageLink}></a>

                <p className="font-semibold text-xl text-white whitespace-nowrap">
                    {jeansLabel}
                </p>
            </div>
        </>
    );
};

export default SlideElement;