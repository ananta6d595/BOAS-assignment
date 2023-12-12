import React from "react";
import earth from "../../assets/save_earth.jpeg";
import Container from "../Container";

const MissionSection = () => {
    return (
        <>
            <div className="flex flex-col gap-10 lg:flex-row max-w-[1500px] mx-auto  px-2  sm:px-4 lg:ps-24 mb-10">
                <div className="flex flex-col  gap-4 lg:py-20 ">
                    <h6 className="text-xl lg:text-3xl font-medium ">
                        Save Jeans. Save Lives.{" "}
                    </h6>
                    <p className="text-sm leading-6 lg:leading-8">
                        At BOAS you save jeans from being burned or ending up at
                        a toxic landfill in Africa. Fashion is responsible for
                        10% of global emissions, and denim is the most polluting
                        fabric. Buy vintage and save jeans, your wallet, CO2 and
                        water. BOAS donates 90% of the profits from your
                        purchase to lifesaving charities, making you a
                        lifesaver!{" "}
                    </p>
                    <div className="flex flex-col gap-4 mx-auto lg:mx-0 lg:mr-auto lg:flex-row">
                        <a
                            className="bg-black text-white px-10 py-4 hover:bg-opacity-95 border-2 border-solid border-black hover:bg-white hover:text-black transition-all "
                            href="https://shop.boas.co/pages/mission">
                            Save Lives{" "}
                        </a>
                    </div>
                </div>
                <div className=" w-auto h-60 lg:h-auto lg:w-full ">
                    <img
                        className="object-cover h-full w-full "
                        src={earth}></img>
                </div>
            </div>
        </>
    );
};

export default MissionSection;
