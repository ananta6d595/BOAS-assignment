import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideElement from "./SlideElement";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ShopByFitProducts = () => {
    const fitCollections = [
        {
            pageLink:
                "https://shop.boas.co/collections/vintage-levis-jeans?filter.p.m.custom.fit=Straight&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            image: "https://d1k98jamwa6vrd.cloudfront.net/small_straight_82e7a25a37.jpg?w=3840&amp;q=75",
            label: "Straight cut",
        },
        {
            pageLink:
                "https://shop.boas.co/collections/vintage-levis-jeans?filter.p.m.custom.fit=Skinny&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            image: "https://d1k98jamwa6vrd.cloudfront.net/small_skinny_602a145d3b.jpg?w=3840&amp;q=75",
            label: "Skinny jeans",
        },
        {
            pageLink:
                "https://shop.boas.co/collections/vintage-levis-jeans?filter.p.m.custom.fit=Slim&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            image: "https://d1k98jamwa6vrd.cloudfront.net/small_slim_9c94e97bbd.jpg?w=3840&amp;q=75",
            label: "Slim",
        },
        {
            pageLink:
                "https://shop.boas.co/collections/vintage-levis-jeans?filter.p.m.custom.fit=Relaxed&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            image: "https://d1k98jamwa6vrd.cloudfront.net/small_relaxed_20a4421aa7.jpg?w=3840&amp;q=75",
            label: "Baggy",
        },
    ];

    return (
        <Container>
            <div className="max-w-[1500px] mx-auto">
                <div>
                    <h2 className="text-black xl:text-3xl text-xl font-semibold mb-4">
                        Shop by Fit
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
                        modules={[Pagination, Navigation]}
                        className="">
                        {fitCollections.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SlideElement
                                        pageLink={data.pageLink}
                                        imgLink={
                                            data.image
                                        }
                                        jeansLabel={data.label}></SlideElement>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                </div>
            </div>
        </Container>
    );
};

export default ShopByFitProducts;
