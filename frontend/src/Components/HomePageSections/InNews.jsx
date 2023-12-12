import React from "react";
import NewsLogo from "../NewsLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Container from "../Container";

const InNews = () => {
    const newsCollections = [
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png",
        },
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png",
        },
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png",
        },
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png",
        },
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png",
        },
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png",
        },
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png",
        },
        {
            img: "https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png",
        },
    ];
    return (
        <Container>
            <div className="max-w-[1500px] mx-auto">
                <div className="">
                    <div className="flex items-center md:flex-col md:items-start ">
                        <h2 className="text-black xl:text-3xl text-xl font-medium leading-9 flex-1">
                            We have been featured
                        </h2>
                        <div className="flex items-center gap-2">
                            <img
                                src="/svg/arrow.svg"
                                width="10"
                                height="10"
                                alt="arrow"
                            />
                            <a
                                className="leading-6 text-black"
                                href="https://shop.boas.co/pages/press">
                                see all
                            </a>
                            <img
                                className="rotate-180"
                                src="/svg/arrow.svg"
                                width="10"
                                height="10"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <Swiper
                            className="mb-10"
                            slidesPerView={"auto"}
                            spaceBetween={10}
                            pagination={{
                                type: "bullets",
                            }}
                            mousewheel={{ invert: true }}
                            keyboard={true}
                            navigation={true}
                            modules={[Pagination, Navigation]}>
                            {newsCollections.map((data, index) => {
                                return (
                                    <SwiperSlide key={index} >
                                        <NewsLogo img={data.img}></NewsLogo>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default InNews;

{
    /* <swiper-container
                            mousewheel-force-to-axis="true"
                            init="false"
                            navigation="true"
                            pagination="true">
                            <swiper-slide
                                style="width: 203px; margin-right: 50px;"
                                role="group"
                                aria-label="1 / 8"
                                className="swiper-slide-active">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/nrc_491a8dec7e.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                            <swiper-slide
                                style="width: 203px; margin-right: 50px;"
                                role="group"
                                aria-label="2 / 8"
                                className="swiper-slide-next">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/life_Save_d310c19854.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                            <swiper-slide
                                style="width: 203px; margin-right: 50px;"
                                role="group"
                                aria-label="3 / 8">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/thumbnail_rutger_c1ca814a21.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                            <swiper-slide
                                style="width: 203px; margin-right: 50px;"
                                role="group"
                                aria-label="4 / 8">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/thumbnail_future_Affairs_ce2d3e81e2.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                            <swiper-slide
                                style="width: 203px; margin-right: 50px;"
                                role="group"
                                aria-label="5 / 8">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/thumbnail_vriendin_9f2dc7746b.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                            <swiper-slide
                                style="width: 203px; margin-right: 50px;"
                                role="group"
                                aria-label="6 / 8">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/FNR_24b2cf7f97.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                            <swiper-slide
                                style="width: 203px; margin-right: 50px;"
                                role="group"
                                aria-label="7 / 8">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/mtsprout_80d1fcb4cf.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                            <swiper-slide
                                role="group"
                                aria-label="8 / 8"
                                style="width: 203px; margin-right: 50px;">
                                <div className="w-24 aspect-square relative mt-4 max-w-xs mb-10">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="-z-10 object-contain"
                                        sizes="96px"
                                        srcset="https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=16&amp;q=75 16w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=32&amp;q=75 32w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=48&amp;q=75 48w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=64&amp;q=75 64w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=96&amp;q=75 96w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=128&amp;q=75 128w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=256&amp;q=75 256w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=384&amp;q=75 384w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=640&amp;q=75 640w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=750&amp;q=75 750w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=828&amp;q=75 828w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=1080&amp;q=75 1080w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=1200&amp;q=75 1200w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=1920&amp;q=75 1920w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=2048&amp;q=75 2048w, https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=3840&amp;q=75 3840w"
                                        src="https://d1k98jamwa6vrd.cloudfront.net/outrider_100d28ef0d.png?w=3840&amp;q=75"
                                        style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                                    />
                                </div>
                            </swiper-slide>
                        </swiper-container> */
}
