import React from "react";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideElement from "../SlideElement";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommentsSlide from "../CommentsSlide";

const CustomerSaySection = () => {
    const reviews = [
        {
            name: "Alexander",
            comment:
                "Amazing prices for great quality vintage/second hand clothing",
            stars: "5",
        },
        {
            name: "Barnabas",
            comment: "Great service, quick delivery and amazing product!",
            stars: "5",
        },
        {
            name: "Jeroen",
            comment:
                "The jeans I ordered wasn't in stock anymore. They send me a different one. Problem solved.",
            stars: "3",
        },
        {
            name: "António",
            comment:
                " Great company, like I mean, where can I find more companies like this. Big congratulations to these guys",
            stars: "5",
        },
        {
            name: "Filipe",
            comment:
                " It's a great idea and the products are great quality. Some of these look brand new. I recommend it.",
            stars: "5",
        },
    ];
    return (
        <div className="bg-[#eceff1] mb-10">
            <Container>
                <div className="max-w-[1500px] mx-auto py-9">
                    <div className="p-4 space-y-7 mx-auto ">
                        <h3 className="text-black xl:text-3xl text-xl font-medium">
                            What out customers say
                        </h3>

                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={10}
                            pagination={{
                                type: "bullets",
                            }}
                            freeMode={true}
                            mousewheel={{
                                forceToAxis: true,
                                releaseOnEdges: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}>
                            {reviews.map((data, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className=" !sm:w-[330px] !md:w-[352px] lg:max-w-[440px] !mr-6 !md:mr-16">
                                        <CommentsSlide
                                            data={data}></CommentsSlide>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <div className="flex items-center gap-2">
                            <p>See our 44 reviews on</p>
                            <h2> -&gt; </h2>
                            <a href="https://www.trustpilot.com/review/boas.co?utm_medium=trustbox&amp;utm_source=MicroReviewCount">
                                <img src="https://d1k98jamwa6vrd.cloudfront.net/trustpilot_e9018ecab7.svg?w=256&amp;q=75"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CustomerSaySection;
