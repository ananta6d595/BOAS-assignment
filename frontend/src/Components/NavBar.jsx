import menuBar from '../assets/menu.svg'

const NavBar = () => {
    return (
        <>
            <div className="sticky md:-top-20 top-0  z-30 bg-white">
                <nav className=" flex flex-col  bg-white px-4  py-2 md:px-10 lg:px-32 max-w-[1500px] mx-auto shadow">
                    <div className="flex items-center justify-between ">
                        <button className="block md:hidden ">
                            <img
                                src={menuBar}
                                width="24"
                                height="24"
                                alt="menu"></img>
                        </button>
                        <div className="flex gap-[2.35rem] md:flex-grow items-center w-1/2 justify-end">
                            <a
                                className=" md:mx-auto md:translate-x-20 mr-auto"
                                href="/">
                                <div className="relative h-10 w-10 md:h-20 md:w-20">
                                    <img
                                        alt="Boas Logo"
                                        loading="lazy"
                                        decoding="async"

                                        // style={{position:absolute,height:100%,width:100%,left:0,top:0,right:0,bottom:0,color:transparent}}
                                        className="absolute h-full w-full"
                                        sizes="(min-width: 780px) 80px, 40px"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=3840&amp;q=75"></img>
                                </div>
                            </a>
                            <div className="gap-[1.5rem] flex items-center md:mr-6">
                                <div>
                                    <a
                                        className="text-xs text-black leading-5 hover:text-neutral-500"
                                        href="https://shop.boas.co/account">
                                        <div className="flex flex-col items-center">
                                            <div className="h-6 w-6 relative">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    // style={{position:absolute,height:100%,width:100%,left:0,top:0,right:0,bottom:0,color:transparent}}
                                                    className="absolute h-full w-full"
                                                    sizes="24px"
                                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=3840&amp;q=75 3840w"
                                                    src="https://d1k98jamwa6vrd.cloudfront.net/profile_circle_934716e78c.svg?w=3840&amp;q=75"></img>
                                            </div>
                                            <p>Account</p>
                                        </div>
                                    </a>
                                    <div className="hidden md:block"></div>
                                </div>
                                <div>
                                    <a
                                        className="text-xs text-black leading-5 hover:text-neutral-500"
                                        href="https://shop.boas.co/cart">
                                        <div className="flex flex-col items-center">
                                            <div className="h-6 w-6 relative">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    // style={{position:absolute,height:100%,width:100%,left:0,top:0,right:0,bottom:0,color:transparent}}
                                                    className="absolute h-full w-full"
                                                    sizes="24px"
                                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=3840&amp;q=75 3840w"
                                                    src="https://d1k98jamwa6vrd.cloudfront.net/shopping_cart_54db548ecf.svg?w=3840&amp;q=75"></img>
                                            </div>
                                            <p>Cart</p>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col relative justify-center ">
                        <div className="leading-8 font-medium flex">
                            <div className=" md:flex mx-auto md:gap-2 hidden">
                                <a
                                    className="text-black p-2 bg-white hover:text-neutral-700"
                                    href="https://shop.boas.co/collections/vintage-jeans-women">
                                    Vintage Women
                                </a>
                                <a
                                    className="text-black p-2 bg-white hover:text-neutral-700"
                                    href="https://shop.boas.co/collections/vintage-jeans-men">
                                    Vintage Men
                                </a>
                                <a
                                    className="text-black p-2 bg-white hover:text-neutral-700"
                                    href="https://shop.boas.co/collections/vintage-jeans-under-30-euro">
                                    Jeans under €30 / £30
                                </a>
                                <a
                                    className="text-black p-2 bg-white hover:text-neutral-700"
                                    href="https://shop.boas.co/collections/vintage-levis-jeans">
                                    Levi's Jeans
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className=" bg-black h-12 md:flex items-center px-28 shadow-md ">
                    <div className="swiper swiper-initialized swiper-horizontal swiper-android swiper-backface-hidden">
                        <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-a61b416bc10a02c2b"
                            aria-live="off">
                            <div
                                className="swiper-slide swiper-slide-active swiper-slide-next w-48"
                                role="group"
                                aria-label="1 / 1"
                                data-swiper-slide-index="0"
                            >
                                <div className="flex justify-center">
                                    <a className="text-white" href="#">
                                        FREE SHIPPING OVER €29
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
