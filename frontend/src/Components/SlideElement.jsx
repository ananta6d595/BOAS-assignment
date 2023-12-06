import React from "react";

const SlideElement = ({ pageLink, imgLink, jeansLabel, logoLink }) => {
    return (
        <div className="mb-10">
            <a className="inset-0" href={pageLink}>
                <div className="relative group overflow-hidden h-96 max-h-[400px]  xl:h-[400px] w-80 xl:w-72 flex flex-col items-center justify-center shadow-lg  ">
                    {jeansLabel && (
                        <p className="absolute z-10 font-semibold text-2xl text-white whitespace-nowrap">
                            {jeansLabel}
                        </p>
                    )}
                    {logoLink && (
                        <div class="absolute w-1/2 h-auto aspect-video z-10">
                            <img
                                sizes="100vw"
                                className="h-full w-full"
                                src={logoLink}></img>
                        </div>
                    )}
                    <img
                        alt={jeansLabel}
                        className="absolute object-cover h-full w-full group-hover:scale-[1.2] duration-[350ms] group-hover:ease-in-out"
                        src={imgLink}
                    />
                    <div className="absolute bg-blue-500 bg-opacity-20 group-hover:bg-opacity-10 inset-0"></div>
                </div>
            </a>
        </div>
    );
};

export default SlideElement;
