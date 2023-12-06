import React, { useEffect, useState } from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideElement from "./SlideElement";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const FeaturedProduct = () => {


    return (
        <Container>
            <div className="mt-20 max-w-[1500px] mx-auto">
                <div>
                    <h2 className="text-black text-center xl:text-3xl text-xl font-bold mb-12">
                        Buy Now, Save Now!
                    </h2>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={10}
                        pagination={{
                            type: "bullets",
                        }}
                        mousewheel={true}
                        keyboard={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className=""
                    >
                        <SwiperSlide >
                            <SlideElement
                                pageLink={
                                    "https://shop.boas.co/collections/vintage-jeans-under-30-euro"
                                }
                                imgLink={
                                    "https://d1k98jamwa6vrd.cloudfront.net/small_hanging_Jeans_adf1a84f6b.jpg?w=3840&amp;q=75"
                                }
                                jeansLabel={"Under €30"}></SlideElement>
                        </SwiperSlide>
                        <SwiperSlide >
                            <SlideElement
                                pageLink={
                                    "https://shop.boas.co/collections/vintage-levis-501-jeans"
                                }
                                imgLink={
                                    "https://d1k98jamwa6vrd.cloudfront.net/small_Gizem_501_da8dbb1953.webp?w=3840&amp;q=75"
                                }
                                jeansLabel={"Levi's 501"}></SlideElement>
                        </SwiperSlide>
                        <SwiperSlide >
                            <SlideElement
                                pageLink={
                                    "https://shop.boas.co/collections/black-vintage-jeans"
                                }
                                imgLink={
                                    "https://d1k98jamwa6vrd.cloudfront.net/small_Upcycled_Black_48db5f0c3e.jpg?w=3840&amp;q=75"
                                }
                                jeansLabel={"Black"}></SlideElement>
                        </SwiperSlide>
                        <SwiperSlide >
                            <SlideElement
                                pageLink={
                                    "https://shop.boas.co/collections/dark-blue-wash-vintage-jeans"
                                }
                                imgLink={
                                    "https://d1k98jamwa6vrd.cloudfront.net/small_Skinny_Jeans_Men_bfa602cfd7.png?w=3840&amp;q=75"
                                }
                                jeansLabel={"Dark blue"}></SlideElement>
                        </SwiperSlide>
                        <SwiperSlide >
                            <SlideElement
                                pageLink={
                                    "https://shop.boas.co/collections/light-blue-wash-vintage-jeans"
                                }
                                imgLink={
                                    "https://d1k98jamwa6vrd.cloudfront.net/small_Gizem_Lightblue_Wash_1d3f3735fe.jpg?w=3840&amp;q=75"
                                }
                                jeansLabel={"Light blue"}></SlideElement>
                        </SwiperSlide>
                        <SwiperSlide >
                            <SlideElement
                                pageLink={
                                    "https://shop.boas.co/collections/upcycled-jeans"
                                }
                                imgLink={
                                    "https://d1k98jamwa6vrd.cloudfront.net/Upcycled_Smiles_Marghe_f22003266a.png?w=3840&amp;q=75"
                                }
                                jeansLabel={"Upcycled Jeans"}></SlideElement>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default FeaturedProduct;
