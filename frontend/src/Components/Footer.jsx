import Container from "./Container";

const Footer = () => {
    return (
        <footer className="bg-slate-100 text-black">
            <Container>
                <div className="mx-auto max-w-[1500px] gap-[2.75rem] flex flex-col">
                    <div className="flex flex-col  gap-2 md:flex-row md:items-center justify-start pt-6">
                        <div className="leading-8 md:flex-1 md:max-w-md">
                            <p className="text-sm">
                                Subscribe to our newsletter
                            </p>
                            <p className="text-xs">
                                We will send you updates and sustainability news
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-7 md:max-w-xl md:flex-1 ">
                            <input
                                placeholder="E-mail"
                                className="placeholder-neutral-500 py-3 px-[0.38rem] bg-slate-200 border-b border-b-primary xl:flex-1"></input>

                            <button className="bg-sky-700 text-white text-lg max-h-12 px-10 py-4 flex items-center justify-center ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-10 justify-center sm:justify-normal sm:grid-cols-2 lg:grid-cols-5 ">
                        <div className="flex flex-col items-start  max-w-[500px] lg:max-w-[400px]  gap-[3.75rem] lg:col-span-2">
                            <div>
                                <div className="flex items-center justify-center sm:justify-normal text-sm gap-3">
                                    <div className="relative h-12 w-12">
                                        <img
                                            alt="boas logo"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                            sizes="(min-width: 420px) 48px, calc(3vw + 36px)"
                                            srcSet="https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=3840&amp;q=75 3840w"
                                            src="https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=3840&amp;q=75"></img>
                                    </div>
                                    <p>BOAS - Save Jeans. Save Lives. </p>
                                </div>
                                <span className="text-xs ">
                                    You've made it to the end! Thanks for taking
                                    the time. If you're here because you're
                                    lost, feel free to{" "}
                                    <a href="https://shop.boas.co/pages/contact-us" className="text-blue-600 visited:text-purple-600 underline">
                                        contact us
                                    </a>{" "}
                                    and we'll get you back on track.
                                </span>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-1 flex-wrap">
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Ideal_86fbea9a2a.png?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Ideal_86fbea9a2a.png?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Ideal_86fbea9a2a.png?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Pay_Pal_3c82f25036.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Pay_Pal_3c82f25036.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Pay_Pal_3c82f25036.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Apple_Pay_2b89379280.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Apple_Pay_2b89379280.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Apple_Pay_2b89379280.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Google_Pay_433bf032b8.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Google_Pay_433bf032b8.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Google_Pay_433bf032b8.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Mastercard_14e2847eb4.png?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Mastercard_14e2847eb4.png?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Mastercard_14e2847eb4.png?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Maestro_4cc73f02eb.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Maestro_4cc73f02eb.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Maestro_4cc73f02eb.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Visa_1bdb22122a.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Visa_1bdb22122a.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Visa_1bdb22122a.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Klarna_8e7af5b864.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Klarna_8e7af5b864.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Klarna_8e7af5b864.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Amex_aedecaf1a5.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Amex_aedecaf1a5.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Amex_aedecaf1a5.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Amazon_Pay_b2418a72eb.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Amazon_Pay_b2418a72eb.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Amazon_Pay_b2418a72eb.svg?w=96&amp;q=75"></img>
                                </div>
                                <div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="40"
                                        height="27"
                                        decoding="async"
                                        srcSet="https://d1k98jamwa6vrd.cloudfront.net/Shop_Pay_d4954693d4.svg?w=48&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Shop_Pay_d4954693d4.svg?w=96&amp;q=75 2x"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/Shop_Pay_d4954693d4.svg?w=96&amp;q=75"></img>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <p className="font-medium">ABOUT BOAS</p>
                            <a
                                href="https://shop.boas.co/pages/mission"
                                className="text-black text-sm cursor-pointer">
                                Mission
                            </a>
                            <a
                                href="https://shop.boas.co/a/faq"
                                className="text-black text-sm cursor-pointer">
                                FAQs
                            </a>
                            <a
                                href="https://shop.boas.co/pages/contact-us"
                                className="text-black text-sm cursor-pointer">
                                Contact
                            </a>
                            <a
                                href="https://shop.boas.co/blogs/nieuws"
                                className="text-black text-sm cursor-pointer">
                                Blog
                            </a>
                            <a
                                href="https://shop.boas.co/pages/team"
                                className="text-black text-sm cursor-pointer">
                                Team
                            </a>
                            <a
                                href="https://shop.boas.co/pages/careers"
                                className="text-black text-sm cursor-pointer">
                                Careers
                            </a>
                            <a
                                href="https://shop.boas.co/pages/shipping-and-returns"
                                className="text-black text-sm cursor-pointer">
                                Shipping and Returns
                            </a>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <p className="font-medium">BRANDS AND PRESS</p>
                            <a
                                href="https://shop.boas.co/pages/press"
                                className="text-black text-sm cursor-pointer">
                                Press
                            </a>
                            <a
                                href="https://shop.boas.co/pages/affiliate"
                                className="text-black text-sm cursor-pointer">
                                Affiliate Program
                            </a>
                        </div>
                        <div className="flex flex-col items-center sm:items-start lg:items-end gap-2">
                            <p className="font-medium">
                                Download the BOAS app{" "}
                            </p>
                            <a href="https://play.google.com/store/apps/details?id=co.boas.boas&amp;pli=1">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="96"
                                    height="28"
                                    decoding="async"
                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/googleplay_2114da4a87.svg?w=96&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/googleplay_2114da4a87.svg?w=256&amp;q=75 2x"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/googleplay_2114da4a87.svg?w=256&amp;q=75"></img>
                            </a>
                            <a href="https://apps.apple.com/de/app/boas-shop-vintage-fashion/id6450268118">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="96"
                                    height="28"
                                    decoding="async"
                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/appstore_53562f351c.svg?w=96&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/appstore_53562f351c.svg?w=256&amp;q=75 2x"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/appstore_53562f351c.svg?w=256&amp;q=75"></img>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row text-xs items-center gap-2 xl:justify-between ">
                        <div className="flex justify-center gap-8 flex-wrap mb-8 xl:order-3">
                            <a href="https://www.facebook.com/BOASgoods/">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/Facebook_6263a0c77d.svg?w=32&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Facebook_6263a0c77d.svg?w=48&amp;q=75 2x"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/Facebook_6263a0c77d.svg?w=48&amp;q=75"></img>
                            </a>
                            <a href="https://www.instagram.com/boas.good/">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/Instagram_8d60ace298.svg?w=32&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Instagram_8d60ace298.svg?w=48&amp;q=75 2x"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/Instagram_8d60ace298.svg?w=48&amp;q=75"></img>
                            </a>
                            <a href="https://www.tiktok.com/@boas.good">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/Tik_Tok_6c7f01c6a8.svg?w=32&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Tik_Tok_6c7f01c6a8.svg?w=48&amp;q=75 2x"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/Tik_Tok_6c7f01c6a8.svg?w=48&amp;q=75"></img>
                            </a>
                            <a href="https://www.linkedin.com/company/boas-good">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/Linkedin_7da1885656.svg?w=32&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Linkedin_7da1885656.svg?w=48&amp;q=75 2x"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/Linkedin_7da1885656.svg?w=48&amp;q=75"></img>
                            </a>
                            <a href="https://open.spotify.com/show/58n1Z5bfAfQDB9xIbzYzHX?si=f204bc31215544e9&amp;nd=1">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="24"
                                    height="24"
                                    decoding="async"
                                    srcSet="https://d1k98jamwa6vrd.cloudfront.net/Spotify_73d9635b03.svg?w=32&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/Spotify_73d9635b03.svg?w=48&amp;q=75 2x"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/Spotify_73d9635b03.svg?w=48&amp;q=75"></img>
                            </a>
                        </div>
                        <div className="flex flex-col gap-2 items-center xl:flex-row xl:gap-16">
                            <a href="https://shop.boas.co/pages/privacy-policy" className="text-indigo-600  visited:text-purple-600">
                                Privacy Policy
                            </a>
                            <a href="https://shop.boas.co/pages/terms-conditions" className="text-indigo-600 visited:text-purple-600">
                                Terms and Conditions
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <img
                                alt=""
                                loading="lazy"
                                width="24"
                                height="24"
                                decoding="async"
                                data-nimg="1"
                                srcSet="https://d1k98jamwa6vrd.cloudfront.net/copyright_a7bdb848a8.svg?w=32&amp;q=75 1x, https://d1k98jamwa6vrd.cloudfront.net/copyright_a7bdb848a8.svg?w=48&amp;q=75 2x"
                                src="https://d1k98jamwa6vrd.cloudfront.net/copyright_a7bdb848a8.svg?w=48&amp;q=75"></img>
                            <p>2023 BOAS - Save Jeans. Save Lives. </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
