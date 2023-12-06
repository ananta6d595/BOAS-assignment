import React from "react";
import Container from "./Container";

const LevisSection = () => {
    return (
        <Container>
            <div className=" max-w-[1500px] mx-auto">
                <article className="relative text-white p-4 bg-black bg-opacity-30 flex flex-col md:items-start lg:p-8 gap-4 ">
                    <div>
                        <h4 className="text-xl font-bold lg:text-4xl">
                            Levi's Jeans
                        </h4>
                        <p className="text-xs leading-6 max-w-5xl lg:text-sm ">
                            Browse more than one thousand authentic Vintage
                            Levi's Jeans. Pick your favourite model below.{" "}
                        </p>
                    </div>
                    <div className="flex gap-4 ">
                        <a
                            className=" min-w-[5rem] max-w-fit z-10  font-semibold leading-6 text-center py-4 flex-1 md:py-4 md:px-10  hover:opacity-95 border-2 border-solid border-blue-light-background hover:text-primary-light-hover"
                            href="https://shop.boas.co/collections/vintage-levis-501-jeans">
                            501
                        </a>
                        <a
                            className=" min-w-[5rem] max-w-fit z-10 text-blue-light-background font-semibold leading-6 text-center py-4 flex-1 md:py-4 md:px-10  hover:opacity-95 border-2 border-solid border-blue-light-background hover:text-primary-light-hover"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+502&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling">
                            502
                        </a>
                        <a
                            className=" min-w-[5rem] max-w-fit z-10 text-blue-light-background font-semibold leading-6 text-center py-4 flex-1 md:py-4 md:px-10  hover:opacity-95 border-2 border-solid border-blue-light-background hover:text-primary-light-hover"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+504&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling">
                            504
                        </a>
                        <a
                            className=" min-w-[5rem] max-w-fit z-10 text-blue-light-background font-semibold leading-6 text-center py-4 flex-1 md:py-4 md:px-10  hover:opacity-95 border-2 border-solid border-blue-light-background hover:text-primary-light-hover"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+505&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling">
                            505
                        </a>
                        <a
                            className=" min-w-[5rem] max-w-fit z-10 text-blue-light-background font-semibold leading-6 text-center py-4 flex-1 md:py-4 md:px-10  hover:opacity-95 border-2 border-solid border-blue-light-background hover:text-primary-light-hover"
                            href="https://shop.boas.co/collections/vintage-levis-jeans?filter.p.m.custom.model=Levi%27s+511&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling">
                            511
                        </a>
                        <a
                            className=" min-w-[5rem] max-w-fit z-10 text-blue-light-background font-semibold leading-6 text-center py-4 flex-1 md:py-4 md:px-10  hover:opacity-95 border-2 border-solid border-blue-light-background hover:text-primary-light-hover"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+512&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling">
                            512
                        </a>
                        <a
                            className=" min-w-[5rem] max-w-fit z-10 text-blue-light-background font-semibold leading-6 text-center py-4 flex-1 md:py-4 md:px-10  hover:opacity-95 border-2 border-solid border-blue-light-background hover:text-primary-light-hover"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.m.custom.model=Levi%27s+550&amp;filter.p.vendor=Levi%27s&amp;sort_by=best-selling">
                            550
                        </a>
                    </div>
                    <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="-z-10 object-cover top-0"
                        src="https://d1k98jamwa6vrd.cloudfront.net/large_5jeans_Coverimage_ef73e3b697.jpg?w=3840&amp;q=75"></img>
                </article>
            </div>
        </Container>
    );
};

export default LevisSection;
