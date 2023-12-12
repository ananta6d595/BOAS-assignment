import React from "react";
import Container from "../Container";
import BlogBox from "../BlogBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const BoasBlog = () => {
    const blogs = [
        {
            blogLink:
                "https://shop.boas.co/blogs/nieuws/fall-double-denim-outfits-cozy-chic-looks",
            img: "https://d1k98jamwa6vrd.cloudfront.net/small_Denim_on_denim_1080x_0d8c5a92da.jpg",
            date: "2023-08-03",
            title: "Fashion Forward: Fall Double Denim Outfits for Cozy &amp; Chic Looks",
        },
        {
            blogLink:
                "https://shop.boas.co/blogs/nieuws/retro-vintage-t-shirts",
            img: "https://d1k98jamwa6vrd.cloudfront.net/small_Thrift_shop_vintage_t_shirts_1_720x_fdfb23c9ea.jpg",
            date: "2023-08-15",
            title: "Retro Revival: Unearthing Vintage T-Shirts",
        },
        {
            blogLink:
                "https://shop.boas.co/blogs/nieuws/summer-style-must-have-denim-shorts",
            img: "https://d1k98jamwa6vrd.cloudfront.net/small_Website_images_7_1080x_8b85ae5e87.jpg",
            date: "2023-07-02",
            title: "Hot Summer Staple: Denim Shorts That Slay",
        },
        {
            blogLink:
                "https://shop.boas.co/blogs/nieuws/summer-jeans-outfit-ideas",
            img: "https://d1k98jamwa6vrd.cloudfront.net/small_summer_jeans_outfits_cover_photo_900x_ad153af473.jpg",
            date: "2023-08-01",
            title: "Summer Jeans Outfit Ideas",
        },
    ];
    return (
        <Container>
            <div className="max-w-[1500px] mx-auto">
                <div className="">
                    <h2 className="text-black xl:text-3xl text-xl font-medium">
                        BOAS Blog
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
                        {blogs.map((data, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <BlogBox data={data}></BlogBox>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default BoasBlog;

{
    /* <swiper-container
        mousewheel-force-to-axis="true"
        init="false"
        navigation="true"
        pagination="true">

        <swiper-slide
            style="width: 282.353px; margin-right: 40px;"
            role="group"
            aria-label="2 / 4"
            className="swiper-slide-next">
            <div className="aspect-[0.65] flex flex-col items-center justify-center mt-4 max-w-[18rem] max-h-[26rem] px-4 relative mb-10">
                <a
                    className="absolute inset-0 z-10 flex lg:hidden"
                    href="https://shop.boas.co/blogs/nieuws/retro-vintage-t-shirts"></a>
                <div className="relative  w-full p-4 transition-all duration-300 flex-[_5_2_auto]">
                    <img src="https://d1k98jamwa6vrd.cloudfront.net/small_Thrift_shop_vintage_t_shirts_1_720x_fdfb23c9ea.jpg?w=3840&amp;q=75" />
                </div>
                <div className="bg-blue-background flex flex-col items-start justify-between gap-4 pb-16 lg:pb-4 w-full p-4 flex-grow">
                    <div className="gap-2 ">
                        <p className="font-medium text-xs whitespace-nowrap text-black leading-5 md:leading-6">
                            2023-08-15
                        </p>
                        <p className="leading-[1.875rem] md:leading-9 font-medium text-xl line-clamp-2 ">
                            Retro Revival: Unearthing Vintage
                            T-Shirts
                        </p>
                    </div>
                    <a
                        className="hidden lg:flex bg-black text-white px-10 py-4 leading-6 hover:bg-opacity-95 focus:bg-dark-blue"
                        href="https://shop.boas.co/blogs/nieuws/retro-vintage-t-shirts">
                        Read more
                    </a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide
            style="width: 282.353px; margin-right: 40px;"
            role="group"
            aria-label="3 / 4">
            <div className="aspect-[0.65] flex flex-col items-center justify-center mt-4 max-w-[18rem] max-h-[26rem] px-4 relative mb-10">
                <a
                    className="absolute inset-0 z-10 flex lg:hidden"
                    href="https://shop.boas.co/blogs/nieuws/summer-style-must-have-denim-shorts"></a>
                <div className="relative  w-full p-4 transition-all duration-300 flex-[_5_2_auto]">
                    <img src="https://d1k98jamwa6vrd.cloudfront.net/small_Website_images_7_1080x_8b85ae5e87.jpg?w=3840&amp;q=75" />
                </div>
                <div className="bg-blue-background flex flex-col items-start justify-between gap-4 pb-16 lg:pb-4 w-full p-4 flex-grow">
                    <div className="gap-2 ">
                        <p className="font-medium text-xs whitespace-nowrap text-black leading-5 md:leading-6">
                            2023-07-02
                        </p>
                        <p className="leading-[1.875rem] md:leading-9 font-medium text-xl line-clamp-2 ">
                            Hot Summer Staple: Denim Shorts That
                            Slay
                        </p>
                    </div>
                    <a
                        className="hidden lg:flex bg-black text-white px-10 py-4 leading-6 hover:bg-opacity-95 focus:bg-dark-blue"
                        href="https://shop.boas.co/blogs/nieuws/summer-style-must-have-denim-shorts">
                        Read more
                    </a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide
            role="group"
            aria-label="4 / 4"
            style="width: 282.353px; margin-right: 40px;">
            <div className="aspect-[0.65] flex flex-col items-center justify-center mt-4 max-w-[18rem] max-h-[26rem] px-4 relative mb-10">
                <a
                    className="absolute inset-0 z-10 flex lg:hidden"
                    href="https://shop.boas.co/blogs/nieuws/summer-jeans-outfit-ideas"></a>
                <div className="relative  w-full p-4 transition-all duration-300 flex-[_5_2_auto]">
                    <img src="https://d1k98jamwa6vrd.cloudfront.net/small_summer_jeans_outfits_cover_photo_900x_ad153af473.jpg?w=3840&amp;q=75" />
                </div>
                <div className="bg-blue-background flex flex-col items-start justify-between gap-4 pb-16 lg:pb-4 w-full p-4 flex-grow">
                    <div className="gap-2 ">
                        <p className="font-medium text-xs whitespace-nowrap text-black leading-5 md:leading-6">
                            2023-08-01
                        </p>
                        <p className="leading-[1.875rem] md:leading-9 font-medium text-xl line-clamp-2 ">
                            Summer Jeans Outfit Ideas
                        </p>
                    </div>
                    <a
                        className="hidden lg:flex bg-black text-white px-10 py-4 leading-6 hover:bg-opacity-95 focus:bg-dark-blue"
                        href="https://shop.boas.co/blogs/nieuws/summer-jeans-outfit-ideas">
                        Read more
                    </a>
                </div>
            </div>
        </swiper-slide>
    </swiper-container> */
}
