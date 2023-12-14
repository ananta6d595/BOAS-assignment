import React from "react";
import Container from "../Container";
import { Parallax } from "react-parallax";

const DonatedSection = () => {
    return (

        <Parallax
            className=" mb-10 "
            bgImage={
                "https://d1k98jamwa6vrd.cloudfront.net/large_Untitled_design_ef2eaeb6a7.jpg"
            }
            strength={400}>
            <div className="flex flex-col items-center leading-normal gap-4 text-white bg-black bg-opacity-50 py-10">
                <div className="text-center">
                    <p className="text-3xl font-medium md:text-7xl md:tracking-widest md:p-6">
                        €6.432
                    </p>
                    <p className="text-sm md:text-xl md:font-medium ">
                        Profits donated to the best lifesaving charities! One
                        life saved so far.{" "}
                    </p>
                </div>
                <a
                    className="px-10 py-4 text-white border-2 border-solid  hover:text-black hover:bg-white transition-all "
                    href="https://shop.boas.co/pages/mission">
                    Learn more
                </a>
            </div>
        </Parallax>
    );
};

export default DonatedSection;
