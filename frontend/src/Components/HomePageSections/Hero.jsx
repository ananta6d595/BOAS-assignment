import React, { useEffect, useState } from 'react';


const Hero = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col sm:flex-row max-w-[1500px] mx-auto gap-3 sm:gap-1 md:gap-2 px-2 sm:pr-0 sm:ps-4 lg:ps-24 mb-10" >

                {/*  Left Section  */}
                <div className=" py-5 md:py-20 w-full" >
                    <header className='mb-5'>
                        <h1 className='font-semibold text-3xl xl:text-[40px] mb-5'>Save Jeans, Save Lives</h1>
                        <p className='text-lg'>You save vintage jeans and we donate 90% of profits to save lives.</p>
                    </header>
                    <div className="countdown-container flex gap-3 justify-start items-center">
                        <div className="countdown-title">
                            <h2 className="text-xl xl:text-3xl font-bold">Price Drops In:</h2>
                            <div className="learn-more-ra mt-3" >
                                <a href="https://shop.boas.co/blogs/nieuws/shopping-just-got-a-lot-more-fun-with-boas-reverse-auction" className='font-thin text-xs text-[#191818]' ><u>Learn more</u></a>
                            </div>
                        </div>
                        <div className=" flex gap-3 sm:gap-1 xl:gap-7 items-end">
                            <div className="countdown-part flex flex-col items-center">
                                <div className="countdown-part__background shadow-xl py-3 px-2 xl:py-5 xl:px-4 rounded-md xl:rounded-xl">
                                    <h1 className="font-bold text-4xl xl:text-[80px] xl:leading-[100%]" id="-hours">05</h1>
                                </div>
                                {width > 1280 ? <span className="text-xs xl:text-base text-center pt-1">Hours</span> : <span className="text-xs xl:text-base text-center pt-1">H</span>}
                            </div>
                            <div className="countdown-part flex flex-col items-center">
                                <div className="countdown-part__background  shadow-xl py-3 px-2 xl:py-5 xl:px-4 rounded-md xl:rounded-xl">
                                    <h1 className="font-bold text-xl xl:text-4xl" id="-minutes">45</h1>
                                </div>
                                {width > 1280 ? <span className="text-xs xl:text-base text-center pt-1">Minutes</span> : <span className="text-xs xl:text-base text-center pt-1">M</span>}
                            </div>
                            <div className="countdown-part flex flex-col items-center bg-white rounded-md xl:rounded-xl">
                                <div className="countdown-part__background  shadow-xl py-3 px-2 xl:py-5 xl:px-4 rounded-md xl:rounded-xl">
                                    <h1 className="font-bold text-xl xl:text-4xl" id="-seconds">27</h1>
                                </div>
                                {width > 1280 ? <span className="text-xs xl:text-base text-center pt-1">Seconds</span> : <span className="text-xs xl:text-base text-center pt-1">S</span>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section  */}
                <div className='relative sm:w-[90%] '>
                    <div className="absolute -z-10 bg-cover bg-bottom bg-gradient-to-t from-bg-white opacity-70 to-transparent w-full h-full" style={{ backgroundImage: "url('//shop.boas.co/cdn/shop/files/hero-img-new.jpg?v=1700680068')" }}>
                    </div>
                    <div className="px-4 xl:px-20 flex gap-4 xl:gap-8 justify-center items-end py-20 mx-auto h-full" >
                        <a href="https://shop.boas.co/collections/vintage-jeans-women" className="flex justify-center py-4 flex-1  bg-[#191818] text-white hover:bg-white hover:opacity-95 hover:text-black" >Shop Women</a>
                        <a href="https://shop.boas.co/collections/vintage-jeans-men" className="flex justify-center py-4 flex-1  bg-[#191818] text-white hover:bg-white hover:opacity-95 hover:text-black" >Shop Men</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;