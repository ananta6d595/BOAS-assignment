import React from "react";
import Container from "./Container";

const DownloadAppSection = () => {
    return (
        <div className="mb-12 bg-[#eceff1] py-12">
            <Container>
                <div className="max-w-[1500px] mx-auto ">
                    <article className="flex items-center relative ">
                        <div className="flex flex-col gap-8 md:max-w-prose">
                            <div className="space-y-4">
                                <h4 className="text-xl font-medium md:text-3xl">
                                    Download the Official BOAS App
                                </h4>
                                <p className="text-sm">
                                    Save Jeans. Save Lives. With our App you buy
                                    vintage jeans in minutes. Browse, save products
                                    and order directly from the App with a 20% app
                                    discount
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://play.google.com/store/apps/details?id=co.boas.boas&amp;pli=1">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/googleplay_2114da4a87.svg?w=256&amp;q=75"></img>
                                </a>
                                <a href="https://apps.apple.com/de/app/boas-shop-vintage-fashion/id6450268118">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/appstore_53562f351c.svg?w=256&amp;q=75"></img>
                                </a>
                            </div>
                        </div>
                        <img
                            alt=""
                            className="hidden xl:block absolute right-10 -translate-y-[14px] h-[283px]"
                            src="https://d1k98jamwa6vrd.cloudfront.net/small_Frame_61305_1_b0e433ec28.png?w=750&amp;q=75"></img>
                    </article>
                </div>
            </Container>
        </div>
    );
};

export default DownloadAppSection;
