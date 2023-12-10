import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideElement from "./SlideElement";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShopByBrand = () => {
    const brandCollection = [
        {
            logoLink:
                "https://d1k98jamwa6vrd.cloudfront.net/Levi_s_logo_280x_d549979840.svg?w=3840&amp;q=75",
            imgLink:
                "https://d1k98jamwa6vrd.cloudfront.net/small_Levis_65969e7cf2_45a5e052f6.webp?w=3840&amp;q=75",
            pageLink: "https://shop.boas.co/collections/levis",
        },
        {
            label: "Wrangler",
            imgLink:
                "https://d1k98jamwa6vrd.cloudfront.net/small_Wrangler_27f603a75b_6b8685339d.webp?w=3840&amp;q=75",
            pageLink: "https://shop.boas.co/collections/wrangler",
        },
        {
            label: "Lee",
            imgLink:
                "https://d1k98jamwa6vrd.cloudfront.net/small_Lee_0d7374ffd9_5c601a986b.webp?w=3840&amp;q=75",
            pageLink: "https://shop.boas.co/collections/lee",
        },
        {
            label: "Diesel",
            imgLink:
                "https://d1k98jamwa6vrd.cloudfront.net/small_Diesel_3d353a5719_6c2f28e506.webp?w=3840&amp;q=75",
            pageLink: "https://shop.boas.co/collections/diesel",
        },
        {
            label: "G-star",
            imgLink:
                "https://d1k98jamwa6vrd.cloudfront.net/small_G_Star_fb9f8b9521_bc86b379fb.webp?w=3840&amp;q=75",
            pageLink: "https://shop.boas.co/collections/g-star",
        },
        {
            label: "Armani",
            imgLink:
                "https://d1k98jamwa6vrd.cloudfront.net/small_Armani_9065317e76_867298a09b.webp?w=3840&amp;q=75",
            pageLink: "https://shop.boas.co/collections/armani",
        },
    ];

    return (
        <Container>
            <div className="max-w-[1500px] mx-auto mb-10">
                <div>
                    <h2 className="mb-4 text-xl font-semibold text-black xl:text-3xl">
                        Shop by Brand
                    </h2>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={10}
                        pagination={{
                            type: "bullets",
                        }}
                        mousewheel={{ invert: true }}
                        keyboard={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}>
                        {brandCollection.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SlideElement
                                        logoLink={data?.logoLink}
                                        jeansLabel={data?.label}
                                        pageLink={data.pageLink}
                                        imgLink={data.imgLink}></SlideElement>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default ShopByBrand;
