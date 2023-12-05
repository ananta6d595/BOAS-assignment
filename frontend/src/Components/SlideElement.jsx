import React from 'react';

const SlideElement = ({pageLink, imgLink, jeansLabel}) => {
    return (
        <>
            <div className="aspect-[0.7] relative flex flex-col items-center justify-center mt-4 max-w-[18rem] bg-primary bg-opacity-30 hover:bg-opacity-25 mb-10 shadow-lg">
                <a
                    className="absolute inset-0 z-10 "
                    href={pageLink}></a>
                <img
                    alt={jeansLabel}
                    loading="lazy"
                    decoding="async"
                    className="-z-10 object-cover hover:scale-105 absolute h-full w-full"
                    src={imgLink}
                />
                <p className="font-semibold text-xl text-white whitespace-nowrap">
                    {jeansLabel}
                </p>
            </div>
        </>
    );
};

export default SlideElement;