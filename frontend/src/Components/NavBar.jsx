import menuBar from "../assets/menu.svg";

const NavBar = ({navLinks, handleNav, nav}) => {


    return (
        <>
            <div className="md:sticky top-0 z-20 md:-top-20">
                <nav className="mx-auto flex max-w-[1500px] flex-col bg-white px-4 py-2 md:px-10 lg:px-32">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleNav}
                            className="block md:hidden ">
                            <img
                                src={menuBar}
                                width="24"
                                height="24"
                                alt="menu"></img>
                        </button>
                        <div className="flex w-1/2 items-center justify-end gap-[2.35rem] md:flex-grow">
                            <a
                                className="mr-auto md:mx-auto md:translate-x-20"
                                href="/">
                                <div className="relative h-10 w-10 md:h-20 md:w-20">
                                    <img
                                        alt="Boas Logo"
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute h-full w-full"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=3840&amp;q=75"></img>
                                </div>
                            </a>
                            <div className="flex items-center gap-6 md:mr-6">
                                <>
                                    <a
                                        className="text-xs leading-5 text-black hover:text-neutral-500"
                                        href="https://shop.boas.co/account">
                                        <div className="flex flex-col items-center">
                                            <div className="relative h-6 w-6">
                                                <img
                                                    className="absolute h-full w-full"
                                                    src="https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=3840&amp;q=75"></img>
                                            </div>
                                            <p>Account</p>
                                        </div>
                                    </a>
                                    <div className="hidden md:block"></div>
                                </>
                                <>
                                    <a
                                        className="text-xs leading-5 text-black hover:text-neutral-500"
                                        href="https://shop.boas.co/cart">
                                        <div className="flex flex-col items-center">
                                            <div className="relative h-6 w-6">
                                                <img
                                                    className="absolute h-full w-full"
                                                    src="https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=3840&amp;q=75"></img>
                                            </div>
                                            <p>Cart</p>
                                        </div>
                                    </a>
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="relative hidden flex-col justify-center md:flex">
                        <div className="flex font-medium leading-8">
                            <div className="mx-auto hidden md:flex md:gap-2">
                                {navLinks.map((data, index) => {
                                    return (
                                        <a
                                            key={index}
                                            className="bg-white p-2 text-black hover:text-neutral-700"
                                            href={data.link}>
                                            {data.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="h-12 items-center bg-black px-28 shadow-md md:flex">
                    <div className="swiper swiper-initialized swiper-horizontal swiper-android swiper-backface-hidden">
                        <div
                            className="swiper-wrapper"
                            id="swiper-wrapper"
                            aria-live="off">
                            <div
                                className="swiper-slide swiper-slide-active swiper-slide-next w-48"
                                role="group"
                                aria-label="1 / 1"
                                data-swiper-slide-index="0">
                                <div className="flex justify-center">
                                    <a className="text-white" href="#">
                                        FREE SHIPPING OVER €29
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
