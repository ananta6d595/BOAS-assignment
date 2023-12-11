import React from "react";

const SavingSection = () => {
    return (
        <div>
            <div className="max-w-[1500px] mx-auto">
                <div className="space-y-4 ">
                    <h2 className="leading-[1.875rem] lg:leading-9 lg:text-xl font-medium">
                        Buying just one pair of vintage jeans saves
                    </h2>
                    <div className="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 text-white gap-4">
                        <div className="bg-dark-blue bg-opacity-100 bg-op flex flex-col items-center justify-center gap-2 xl:gap-8 text-center aspect-square max-w-xs">
                            <img
                                className=" lg:w-16 lg:h-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Frame_d938a0a104.svg?w=96&amp;q=75"></img>
                            <p className="font-medium leading-[1.875rem] lg:text-xl lg:leading-9 px-4 line-clamp-2 ">
                                Driving over 27 kms
                            </p>
                            <p className="text-sm leading-6 px-2 line-clamp-2">
                                (8.35 kg of O2)
                            </p>
                        </div>
                        <div className="bg-dark-blue bg-opacity-80 bg-op flex flex-col items-center justify-center gap-2 xl:gap-8 text-center aspect-square max-w-xs">
                            <img
                                className=" lg:w-16 lg:h-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Frame_60102_269c873235.svg?w=96&amp;q=75"></img>
                            <p className="font-medium leading-[1.875rem] lg:text-xl lg:leading-9 px-4 line-clamp-2 ">
                                Showering 15 times
                            </p>
                            <p className="text-sm leading-6 px-2 line-clamp-2">
                                (945 liters of water)
                            </p>
                        </div>
                        <div className="bg-dark-blue bg-opacity-90 bg-op flex flex-col items-center justify-center gap-2 xl:gap-8 text-center aspect-square max-w-xs">
                            <img
                                className=" lg:w-16 lg:h-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Layer_1_37bfccf775.svg?w=96&amp;q=75"></img>
                            <p className="font-medium leading-[1.875rem] lg:text-xl lg:leading-9 px-4 line-clamp-2 ">
                                1 small balcony
                            </p>
                            <p className="text-sm leading-6 px-2 line-clamp-2">
                                (land occupation of 3 sqm per year)
                            </p>
                        </div>
                        <div className="bg-dark-blue bg-opacity-75 bg-op flex flex-col items-center justify-center gap-2 xl:gap-8 text-center aspect-square max-w-xs">
                            <img
                                className=" lg:w-16 lg:h-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Frame_1_236c570f3e.svg?w=96&amp;q=75"></img>
                            <p className="font-medium leading-[1.875rem] lg:text-xl lg:leading-9 px-4 line-clamp-2 ">
                                425 tomatoes
                            </p>
                            <p className="text-sm leading-6 px-2 line-clamp-2">
                                (12.2 g of PO4)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavingSection;
