import React from "react";
import Container from "./Container";
import LeviesButton from "./LeviesButton";

const LevisSection = () => {
    const collections = [
        {
            link: "https://shop.boas.co/collections/vintage-levis-501-jeans",
            label: "501",
        },
        {
            link: "https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+502&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            label: "502",
        },
        {
            link: "https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+504&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            label: "504",
        },
        {
            link: "https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+505&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            label: "505",
        },
        {
            link: "https://shop.boas.co/collections/vintage-levis-jeans?filter.p.m.custom.model=Levi%27s+511&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            label: "511",
        },
        {
            link: "https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+512&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling",
            label: "512",
        },
        {
            link: "https://shop.boas.co/collections/pre-owned-jeans?filter.p.m.custom.model=Levi%27s+550&amp;filter.p.vendor=Levi%27s&amp;sort_by=best-selling",
            label: "550",
        },
    ];

    return (
        <Container>
            <div className=" max-w-[1500px] mx-auto">
                <article className="relative text-white p-4 bg-stone-800 bg-opacity-30 flex flex-col md:items-start justify-center lg:p-8 gap-4 ">
                    <div className=" w-full h-full lg:pb-2">
                        <h4 className="text-xl font-bold lg:text-4xl ">
                            Levi's Jeans
                        </h4>
                        <p className="text-xs leading-6 max-w-5xl lg:text-base ">
                            Browse more than one thousand authentic Vintage
                            Levi's Jeans. Pick your favourite model below.{" "}
                        </p>
                    </div>
                    <div className="flex flex-wrap  gap-4 ">
                        {collections.map((data, index) => {
                            return (<LeviesButton key={index} href={data.link} label={data.label}></LeviesButton>)
                        })}

                    </div>
                    <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="-z-10 absolute object-cover h-full w-full left-0 top-0"
                        src="https://d1k98jamwa6vrd.cloudfront.net/large_5jeans_Coverimage_ef73e3b697.jpg"></img>
                </article>
            </div>
        </Container>
    );
};

export default LevisSection;
