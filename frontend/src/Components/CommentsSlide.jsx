import React from "react";
import { SwiperSlide } from "swiper/react";

const CommentsSlide = ({  data }) => {
    const { stars, comment, name } = data;
    console.log(Number(stars));
    const starImage = (<img src="https://d1k98jamwa6vrd.cloudfront.net/Star_5de452a57a.svg?w=48&amp;q=75"></img>)
    return (

            <div className="flex flex-col items-start justify-center mt-4 max-w-sm gap-4 mb-7">
                <div className="flex">
                    {[...Array(Number(stars))].map((_,index) => {
                        return (
                        <img key={index} src="https://d1k98jamwa6vrd.cloudfront.net/Star_5de452a57a.svg?w=48&amp;q=75"></img>
                    );})}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-black text-sm">{comment}</p>
                    <p className="font-semibold">{name}</p>
                </div>
            </div>

    );
};

export default CommentsSlide;
