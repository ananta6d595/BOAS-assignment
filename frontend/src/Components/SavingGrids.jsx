import React from "react";

const SavingGrids = ({ data }) => {
    const { image, example, amount } = data;

    return (
        <>
            <div className="bg-sky-800 bg-opacity-100 flex flex-col items-center justify-center gap-2 xl:gap-8 text-center aspect-square max-w-xs max-h-80 mx-auto w-full h-full">
                <img className=" lg:w-16 lg:h-16" src={image}></img>
                <p className="font-medium leading-[1.875rem] lg:text-xl lg:leading-9 px-4 line-clamp-2 ">
                    {example}
                </p>
                <p className="text-sm leading-6 px-2 line-clamp-2">{amount}</p>
            </div>
        </>
    );
};

export default SavingGrids;
