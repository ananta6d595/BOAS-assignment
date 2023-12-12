import React from 'react';

const BlogBox = ({ data }) => {
    const { blogLink, img, date, title } = data;
    return (
        <div>
            <div className="aspect-[0.65] flex flex-col items-center justify-center mt-4 max-w-[18rem] max-h-[26rem] px-4 relative mb-10">
                <a
                    className="absolute inset-0 z-10 flex lg:hidden"
                    href={blogLink}></a>
                <div className="relative  w-full p-4 transition-all duration-300 flex-[_5_2_auto]">
                    <img
                        className="object-cover absolute "
                        src={img}
                    />
                </div>
                <div className="bg-blue-background flex flex-col items-start justify-between gap-4 pb-16 lg:pb-4 w-full p-4 flex-grow">
                    <div className="gap-2 ">
                        <p className="font-medium text-xs whitespace-nowrap text-black leading-5 md:leading-6">
                            {date}
                        </p>
                        <p className="leading-[1.875rem] md:leading-9 font-medium text-xl line-clamp-2 ">
                            {title}
                        </p>
                    </div>
                    <a
                        className="hidden lg:flex bg-black text-white px-10 py-4 leading-6 hover:bg-opacity-95 focus:bg-dark-blue"
                        href={blogLink}>
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogBox;