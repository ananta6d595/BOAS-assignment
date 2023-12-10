import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SideNavBar = ({ navLinks, handleNav, nav }) => {
    return (
        <div
            className={`${
                nav ? "left-0" : "-left-[130%]"
            } duration-300 fixed md:hidden md:-left-[110%] z-10 w-screen h-screen backdrop-blur-sm backdrop-brightness-[0.7]`}>
            <div
                className={`fixed flex justify-between items-start top-0 z-20  md:hidden duration-300 ease-out h-full w-full `}>
                <div className="bg-[#eceff1] w-[85%] h-full p-3">
                    <a
                        className="flex justify-start items-center gap-4"
                        href="/">
                        <img
                            alt="Boas Logo"
                            className="h-10 w-10 md:h-20 md:w-20"
                            src="https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=3840&amp;q=75"></img>
                        Save Jeans, Save lives
                    </a>
                    <div className=" w-full pt-2 flex flex-col">
                        {navLinks.map((data, index) => {
                            return (
                                <a
                                    key={index}
                                    className="px-2 py-4 text-black text-center hover:text-neutral-700 font-semibold"
                                    href={data.link}>
                                    {data.label}
                                </a>
                            );
                        })}
                        <a
                            className="px-2 py-4 text-black text-center hover:text-neutral-700 font-semibold"
                            href="https://shop.boas.co/blogs/nieuws">
                            Blog
                        </a>
                    </div>
                    <div className=" relative flex flex-col justify-center items-center py-8 gap-2 bg-primary bg-opacity-70 md:order-2 w-full ">
                        <img
                            className="absolute h-full object-cover w-full"
                            src="https://d1k98jamwa6vrd.cloudfront.net/mountains_f85e467534.png?w=3840&amp;q=75"></img>
                        <p></p>
                        <div className="flex flex-col gap-2 z-20">
                            <a className="">
                                <img src="https://d1k98jamwa6vrd.cloudfront.net/googleplay_2114da4a87.svg?w=256&amp;q=75"></img>
                            </a>
                            <a className="">
                                <img src="https://d1k98jamwa6vrd.cloudfront.net/appstore_53562f351c.svg?w=256&amp;q=75"></img>
                            </a>
                        </div>
                    </div>
                </div>

                <button onClick={handleNav} className=" mr-5  pt-4">
                    <AiOutlineClose className="h-10 w-10 mt-0" />
                </button>
            </div>
        </div>
    );
};

export default SideNavBar;
